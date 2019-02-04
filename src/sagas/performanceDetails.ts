import { SagaIterator } from 'redux-saga'
import { call, fork, put, take } from 'redux-saga/effects'
import { setSendToId } from '../actions/commentBox'
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
    while (true) {
        const performanceId = yield take(actions.getPerformanceInfo)
        try {
            const snapshot = yield call(firebaseSaga.firestore.getDocument, 'performances/' + performanceId.payload)
            const performance = snapshot.data()
            const convertedComments: any = []
            yield performance.comments.map((data: any) => {
                convertedComments.push(
                    {
                        content: data.content,
                        createdAt: data.created_at.toDate(),
                        updatedAt: data.updated_at.toDate(),
                        userId: data.user_id,
                    }
                )
            })
            yield put(actions.successPerformanceInfo(
                {
                    address: performance.address,
                    artistId: performance.artist_id,
                    comments: convertedComments,
                    discription: performance.discription,
                    finish: performance.finish.toDate(),
                    geoLocate: performance.geo_locate,
                    locateName: performance.locate_name,
                    performanceTitle: performance.name,
                    start: performance.start.toDate(),
                    thumbnail: performance.thumbnail,
                }
            ))
            yield put(setSendToId(performanceId.payload))
            document.title = 'TIPPEER | ' + performance.performance.name
        } catch (e) {
            yield put(actions.faildPerformanceInfo())
        }
    }
}

export default [
    fork(doGetPerformanceInfoWorker),
]