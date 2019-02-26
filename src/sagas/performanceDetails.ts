import { SagaIterator } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import { setSendToId, successSendPerformanceComment } from '../actions/commentBox'
import * as actions from '../actions/performanceDetails'
import { IComments } from '../reducers/performaceDetails'
import firebaseSaga from './firebase'

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
            convertedComments.sort((a: any, b: any) => a.createdAt > b.createdAt ? -1 : 1)
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
            document.title = 'TIPPEER | ' + performance.name
        } catch (e) {
            yield put(actions.faildPerformanceInfo())
        }
    }
}

function* addNewCommentWorker(): SagaIterator {
    while(true) {
        const comment = yield take(successSendPerformanceComment)
        const state = yield select()
        const user: string = state.auth.id
        const comments: IComments[] = state.performanceDetails.comments
        comments.unshift(
            {
                content: comment.payload,
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: user,
            }
        )
        yield put(actions.addNewComment(comments))
    }
}

export default [
    fork(doGetPerformanceInfoWorker),
    fork(addNewCommentWorker),
]