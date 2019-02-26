import { SagaIterator } from 'redux-saga'
import { cancel, fork, put, take } from 'redux-saga/effects'
import { closeQR, openQR } from '../actions/manage'
import { addNewSyncComment, setNewSyncComment } from '../actions/manageQR'
import { IComments } from '../reducers/manageQR'
import firebaseSaga from './firebase'

function* doCheckQRWorker(): SagaIterator {
    while (true) {
        yield take(openQR)
        // const state = yield select()
        const id: string = 'yGDRmCMUFqqcaDHymVL4R'
        const task = yield fork(
            firebaseSaga.firestore.syncDocument,
            'performances/' + id,
            { successActionCreator: addNewSyncComment }
        )
        yield take(closeQR)
        yield cancel(task)
    }
}

function* setNewComment(): SagaIterator {
    while(true) {
        const comment = yield take(addNewSyncComment)
        const data = comment.payload.data().comments
        const comments: IComments[] = new Array()
        data.map((info: any) => {
            comments.push(
                {
                    content: info.content,
                    createdAt: info.created_at.toDate(),
                    updatedAt: info.updated_at.toDate(),
                    userId: info.user_id,
                }
            )
        })
        comments.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
        yield put(setNewSyncComment(comments))
    }
}

export default [
    fork(doCheckQRWorker),
    fork(setNewComment)
]