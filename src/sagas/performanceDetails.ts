import { SagaIterator } from 'redux-saga'
import { call, fork, put, take } from 'redux-saga/effects'
import * as actions from '../actions/performanceDetails'
// import { IComments } from '../reducers/performaceDetails'
import firebaseSaga from './firebase'

// interface ISnapshot {
//     address: string
//     artist_id: string
//     comments: IComments[]
//     created_at: Date
//     discription: string
//     finish: Date
//     geo_locate: number[]
//     locate_name: string
//     name: string
//     postal_code: string
//     start: Date
//     thumbnail: string
//     updated_at: Date
// }



function* doGetPerformanceInfoWorker(): SagaIterator {
    while(true) {
        const performanceId = yield take(actions.getPerformanceInfo)
        try{
            const snapshot = yield call(firebaseSaga.firestore.getDocument, 'performances/' + performanceId.payload)
            const performance = snapshot.data()
                yield put(actions.successPerformanceInfo(
                    {
                        address: performance.address,
                        artistId: performance.artist_id,
                        comments: performance.comments,
                        discription: performance.discription,
                        finish: performance.finish.toDate(),
                        geoLocate: performance.geo_locate,
                        locateName: performance.locate_name,
                        performanceTitle: performance.name,
                        start: performance.start.toDate(),
                        thumbnail: performance.thumbnail,
                    }
                ))
        }catch(e){
            yield put(actions.faildPerformanceInfo())
        }
    }
}

export default [
    fork(doGetPerformanceInfoWorker),
]