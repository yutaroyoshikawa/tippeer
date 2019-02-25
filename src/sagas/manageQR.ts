import { firestore } from 'firebase/app'
import 'firebase/firestore'
import { SagaIterator } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import * as actions from '../actions/manageQR'
import { IPerformance } from '../reducers/manageQR'
import firebaseSaga from './firebase'

function* doGetRecentPerformance(): SagaIterator {
    while (true) {
        yield take(actions.requestGetManageQrPerformance)
        const state = yield select()
        const artistId: string = state.auth.id
        const now = new Date()
        const max = now.setDate(now.getDate() + 1)
        try {
            const ref = firestore().collection('performances').where('start', '>', new Date(max)).where('artist_id', '==', artistId)
            const snapshot: firestore.QuerySnapshot = yield call(firebaseSaga.firestore.getCollection, ref)
            let performances: IPerformance = {
                comments: new Array(),
                discription: '',
                finish: new Date(),
                id: '',
                name: '',
                start: new Date(),
                thumbnail: '',
                tippingHash: '',
                tippingSum: 0,
            }
            snapshot.forEach(doc => (
                performances = {
                    comments: [],
                    discription: doc.data().discription,
                    finish: doc.data().finish.toDate(),
                    id: doc.id,
                    name: doc.data().name,
                    start: doc.data().start.toDate(),
                    thumbnail: doc.data().thumbnail,
                    tippingHash: '',
                    tippingSum: 0,
                }
            ))
            yield put(actions.successGetManageQrPerformance(performances))
        } catch (e) {
            yield put(actions.faildGetManageQrPerformance(e))
        }
    }
}

export default [
    fork(doGetRecentPerformance),
]