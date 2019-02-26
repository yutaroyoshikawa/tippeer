import { firestore } from 'firebase/app'
import 'firebase/firestore'
import { SagaIterator } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import * as actions from '../actions/commentBox'
import firebaseSaga from './firebase'

function* doSendComment(): SagaIterator {
    while (true) {
        yield take(actions.requestSendComment)
        const state = yield select()
        const type: 'works' | 'performance' = state.commentBox.type
        const comment: string = state.commentBox.comment
        const sendToId: string = state.commentBox.sendToId
        const userId: string = state.auth.id
        const rate: number = state.commentBox.rate
        try {
            if (type === 'performance') {
                yield call(
                    firebaseSaga.firestore.updateDocument,
                    'performances/' + sendToId,
                    'comments',
                    firestore.FieldValue.arrayUnion(
                        {
                            content: comment,
                            created_at: new Date(),
                            updated_at: new Date(),
                            user_id: userId,
                        }
                    )
                )
                yield put(actions.successSendPerformanceComment(comment))
            } else {
                yield call(
                    firebaseSaga.firestore.updateDocument,
                    'works/' + sendToId,
                    'comments',
                    firestore.FieldValue.arrayUnion(
                        {
                            content: comment,
                            created_at: new Date(),
                            score: rate,
                            updated_at: new Date(),
                            user_id: userId,
                        }
                    )
                )
                yield put(actions.successSendWorksComment({content: comment, rating: rate}))
            }
        } catch (e) {
            yield put(actions.faildSendComment(e))
        }
    }
}

export default [
    fork(doSendComment),
]