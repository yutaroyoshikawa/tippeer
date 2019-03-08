import dataURLtoBlob from 'dataurl-to-blob'
import { firestore } from 'firebase/app'
import 'firebase/firestore'
import nanoid from 'nanoid'
import * as notifications from 'react-notification-system-redux'
import { SagaIterator } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import * as actions from '../actions/managePerformance'
import { IPlace, IRegistPerformance } from '../reducers/managePerformance'
import firebaseSaga from './firebase'

function* doGetRegistedPerformances(): SagaIterator {
    while(true) {
        yield take(actions.requestGetRegistedPerformances)
        const state = yield select()
        const artistId: string = state.auth.id
        try{
            const ref: firestore.CollectionReference = firestore().collection('performances')
            const snapshot: firestore.QuerySnapshot = yield call(firebaseSaga.firestore.getCollection, ref.where('artist_id', '==', artistId))
            const performances: actions.IPerformance[] = new Array()
            snapshot.forEach(doc => (
                performances.push({
                    discription: doc.data().discription,
                    finish: doc.data().finish.toDate(),
                    id: doc.id,
                    name: doc.data().name,
                    place: {
                        geoLocate: doc.data().geo_locate,
                        id: doc.data().place_id,
                        name: doc.data().place_name,
                        postalCode: doc.data().postal_code,
                    },
                    start: doc.data().start.toDate(),
                    thumbnail: doc.data().thumbnail,
                })
            ))
            performances.sort((a, b) => a.start > b.start ? -1 : 1)
            yield put(actions.successGetRegistedPerformances(performances))
        }catch(e) {
            yield put(actions.faildGetRegistedPerformances())
        }
    }
}

function* doRegistPerformanceWorker(): SagaIterator {
    while(true){
        yield take(actions.requestRegistPerformance)
        const state = yield select()
        const registData: IRegistPerformance = state.managePerformance.regist
        const userId: string = state.auth.id
        const performanceId: string = nanoid()
        const thumbFileName: string = nanoid() + '.png'
        const thumbPath = '/images/performance/' + thumbFileName
        try{
            const snapshot = yield call(firebaseSaga.firestore.getDocument, '/places/' + registData.placeId)
            const placeInfo = snapshot.data()
            let thumbUrl: string = ''
            if(registData.thumbData){
                const task = firebaseSaga.storage.uploadFile(thumbPath, dataURLtoBlob(registData.thumbData), {contentType: 'image/png',})
                yield task
                thumbUrl = yield call(firebaseSaga.storage.getDownloadURL, thumbPath)
            }
            yield call(
                firebaseSaga.firestore.setDocument,
                'performances/' + performanceId, 
                new Object({
                    artist_id: userId,
                    comments: new Array(),
                    discription: registData.discription,
                    finish: registData.finish,
                    geo_locate: placeInfo.geo_place,
                    name: registData.title,
                    place_id: registData.placeId,
                    place_name: placeInfo.name,
                    postal_code: placeInfo.postal_code,
                    start: registData.start,
                    thumbnail: thumbUrl,
                    tipping: new Array(),
                    tipping_token: '',
                }),
                {
                    merge: false,
                }
            )
            yield put(notifications.success(
                {
                    autoDismiss: 5,
                    message: '登録しました。',
                    position: 'tr',
                }
            ))
            yield put(actions.successRegistPerformance(
                {
                    discription: registData.discription,
                    finish: registData.finish,
                    id: performanceId,
                    name: registData.title,
                    place: {
                        geoLocate: placeInfo.geo_locate,
                        id: registData.placeId,
                        name: placeInfo.name,
                        postalCode: placeInfo.postal_code,
                    },
                    start: registData.start,
                    thumbnail: registData.thumbData,
                }
            ))
        }catch(e){
            yield put(notifications.error(
                {
                    autoDismiss: 5,
                    message: '登録に失敗しました。',
                    position: 'tr',
                }
            ))
            yield put(actions.faildRegistPerformance(e))
        }
    }
}

function* doGetPlaceSelection(): SagaIterator {
    while(true) {
        yield take(actions.requestGetPlaces)
        try {
            const snapshot: firestore.QuerySnapshot = yield call(firebaseSaga.firestore.getCollection, 'places/')
            const places: IPlace[] = new Array()
            snapshot.forEach(doc => (
                places.push({
                    label: doc.data().name,
                    value: doc.id,
                })
            ))
            yield put(actions.successGetPlaces(places))
        }catch(e) {
            yield put(actions.faildGetPlaces(e))
        }
    }
}

export default [
    fork(doRegistPerformanceWorker),
    fork(doGetRegistedPerformances),
    fork(doGetPlaceSelection),
]