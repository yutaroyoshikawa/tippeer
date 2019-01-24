import {firestore} from 'firebase'
import * as notifications from 'react-notification-system-redux'
import { SagaIterator } from 'redux-saga'
import { call, fork, put, select, take, takeLatest } from 'redux-saga/effects'
import * as authActions from '../actions/auth'
import * as dialog from '../actions/dialog'
import { closeDialog } from '../actions/dialog'
import * as registActions from '../actions/registUser'
import { openMenu, openRegistration } from '../actions/userMenu'
import firebaseSaga from './firebase'

function* doCheckUsersExists(): SagaIterator {
    while(true){
        const user = yield take(authActions.successCurrentUserInfo)
        user.payload.displayName ? 
            yield put(authActions.existsUser())
            :
            yield put(authActions.noExistsUser())
    }
}

function* doDetermineAleart(): SagaIterator {
    while(true) {
        yield take(authActions.noExistsUser)
        const state = yield select()
        const authState = yield state.auth.authState
        if(authState !== 'regist'){
            yield put(authActions.registRequestAlert())
        }
    }
}

function* doRegist(): SagaIterator {
    while(true){
        yield take("REQUEST_REGISTRATION")
        yield put(openRegistration())
        yield put(openMenu())
        yield put(closeDialog())
    }
}

function* doRequestRegistAleart(): SagaIterator {
    while(true) {
        yield take(authActions.registRequestAlert)
        yield put(dialog.openDialog(
            {
                buttons: [
                    {
                        action: "REQUEST_REGISTRATION",
                        label: "はい"
                    },
                    {
                        action: "SUCCESS_CANSEL_REGIST_USER",
                        label: "いいえ"
                    },
                ],
                content: "アカウント情報が登録されていません。登録しますか？",
                onClose: "SUCCESS_CANSEL_REGIST_USER",
                title: "登録",
            }
        ))
    }
}

function* loginCompleteAleart(): SagaIterator {
    while(true) {
        yield take(authActions.existsUser)
        const state = yield select()
        const id = yield state.auth.id
        yield put(notifications.show(
            {
                autoDismiss: 5,
                message: id + 'としてログインしました。',
                position: 'tr',
                title: 'ログイン',
            },
            'success',
        ))
    }
}

export function* registUserInfo(Uid: string, Id: string, Name: string, Mail: string, Birthday: string, Tags: string[], Icon: string | null): SagaIterator{
    yield call(
        firebaseSaga.firestore.addDocument,
        'users/',
        {
            account_type: "user",
            birthday: new Date(Birthday),
            browsing_history: [],
            created_at: firestore.Timestamp.now(),
            follow_artist: [],
            icon_url: Icon,
            id: Id,
            mail: Mail,
            name: Name,
            purchase_history: [],
            search_history: [],
            tags: Tags,
            uid: Uid,
            updated_at: firestore.Timestamp.now(),
        }
    )
}

function* getSuggestionTagsWorker(input: any):SagaIterator {
    const searchWord = yield input.payload
    const tags: string[] = yield []
    if(input.payload){
        const snapshot = yield call(firebaseSaga.firestore.getCollection, 'tags')
        yield snapshot.forEach((tag: any) => {
            if(tag.data().name.match(new RegExp('^' + searchWord)) || tag.data().reading.match(new RegExp('^' + searchWord))){
                tags.push(tag.data().name)
            }
        })
    }
    yield put(registActions.setSuggestionTags(tags))
}

function getIsUserExists(id: string){
    return new Promise( async (resolve) => {
        const collection = await firestore().collection('users')
        const query = await collection.where("id", "==", id)
        await query.get().then((doc) => (
            doc.empty ? resolve(false) : resolve(true)
        ))
    })
}

export function getUserId(Uid: string){
    return new Promise( async (resolve) => {
        const collection = await firestore().collection('users')
        const query = await collection.where("uid", "==", Uid)
        let id: string = ''
        await query.get().then((doc) => (
            doc.forEach((data) => {
                id = data.data().id
            }) 
        ))
        resolve(id)
    })
}

export function getArtistDetails(Id: string){
    return new Promise( async (resolve, reject) => {
        const collection = await firestore().collection('users')
        const query = await collection.where("id", "==", Id).where("account_type", "==", "artist")
        let artist: any = await {}
        await query.get().then((doc) => (
            doc.forEach((data) => {
                artist = data.data()
            }) 
        ))
        if(artist){
            await resolve(artist)
        }else{
            await reject()
        }

    })
}

export function getPerformances(Id: string){
    return new Promise( async (resolve, reject) => {
        const collection = await firestore().collection('performances')
        const query = await collection.where('artist_id', '==', Id).orderBy('finish', 'desc')
        const artist: any = await []
        await query.get().then((doc) => (
            doc.forEach((data) => {
                artist.push({
                    ...data.data(),
                    id: data.id,
                })
            }) 
        ))
        if(artist){
            resolve(artist)
        }else{
            reject()
        }
    })
}

export function getPlacePerformances(Id: string){
    return new Promise( async (resolve, reject) => {
        const collection = await firestore().collection('performances')
        const query = await collection.where('place_id', '==', Id).orderBy('finish', 'desc')
        const performances: any = await []
        await query.get().then((doc) => (
            doc.forEach((data) => {
                performances.push({
                    finish: data.data().finish.toDate(),
                    id: data.id,
                    placeId: data.data().place_id,
                    placeName: data.data().place_name,
                    start: data.data().start.toDate(),
                    thumbnail: data.data().thumbnail,
                })
            }) 
        ))
        if(performances){
            resolve(performances)
        }else{
            reject()
        }
    })
}

export function* checkUserExists(id: string): SagaIterator {
    const user = yield call(getIsUserExists, id)
    return user
}

export default [
    fork(doCheckUsersExists),
    fork(doDetermineAleart),
    fork(loginCompleteAleart),
    fork(doRequestRegistAleart),
    fork(doRegist),
    takeLatest(registActions.setTagInput, getSuggestionTagsWorker),
]