import * as firebase from 'firebase'
import * as notifications from 'react-notification-system-redux'
import { SagaIterator } from 'redux-saga'
import { call, fork, put, take } from 'redux-saga/effects'
import * as actions from '../actions/auth'
import firebaseSaga from './firebase'
import { getUserId } from './fireStore'

function onAuthStateChanged() {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => (
            user ? resolve(user) : reject(new Error('Ops!'))
        ))
    })
}
function onAuthDelete() {
    const currentUser = firebase.auth().currentUser
    return new Promise((resolve, reject) => {
        if(currentUser){
            currentUser.delete().then(() => {
                resolve()
            }).catch((error) => {
                reject('error')
            })
        }
    })
}

function* deleteAccount(): SagaIterator {
    while(true){
        yield take("REQUEST_DELETE_ACCOUNT")
        try{
            yield call(onAuthDelete)
            yield put({type:"SUCCESS_DELETE_ACCOUNT"})
        }catch(e){
            yield put({type: "FAILD_DELETE_ACCOUNT"})
        }
    }
}

function* doHideAuthWorker():SagaIterator {
    while(true){
        yield take(actions.successCurrenUserInfo)
        yield put(actions.hideAuth())
    }
}

function* doInitializeAuthWorker():SagaIterator {
    while(true){
        yield take(actions.requestLogin)
        try{
            const user:firebase.User = yield call(onAuthStateChanged)
            const userId: string = yield call(getUserId, user.uid)
            yield put(actions.successCurrenUserInfo(
                {
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    id: userId,
                    photoURL: user.photoURL,
                    uid: user.uid,
                }
            ))
        }catch(e) {
            yield put(actions.failureCurrentUserInfo({errorMsg: e}))
        }
    }
}

function* doLogoutWorker():SagaIterator {
    while(true){
        yield take(actions.requestLogout)
        try{
            yield call(firebaseSaga.auth.signOut)
            yield put(actions.successLogout())
        }catch(e){
            yield put(actions.failureLogout())
        }
        
    }
}

function* doLogoutNotifify(): SagaIterator {
    while(true) {
        yield take(actions.successLogout)
        yield put(notifications.success(
            {
                autoDismiss: 5,
                message: 'ログアウトしました。',
                position: 'tr',
            }
        ))
    }
}

function onAuthInfoChanged(Name: string, Icon: string | null, Email: string) {
    return new Promise( async (resolve, reject) => {
        const user = await firebase.auth().currentUser
        if(user){
            await user.updateProfile({
                displayName: Name,
                photoURL: Icon,
            })
            await user.updateEmail(Email).then(() => {
                resolve()
            })
        }else{
            reject('エラーが起きました。しばらくしてから再度お試しください。')
        }
    })
}

export function* changeUserInfo(Name: string, Icon: string | null, email: string) {
    yield call(onAuthInfoChanged, Name, Icon, email)
}

export default [
    fork(deleteAccount),
    fork(doInitializeAuthWorker),
    fork(doLogoutWorker),
    fork(doHideAuthWorker),
    fork(doLogoutNotifify),
]