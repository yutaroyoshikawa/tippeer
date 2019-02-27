import dataURLtoBlob from 'dataurl-to-blob'
import jsQR from 'jsqr'
import nanoid from 'nanoid'
import * as notifications from 'react-notification-system-redux'
import { SagaIterator } from 'redux-saga'
import { call, cancel, delay, fork, put, select, take } from 'redux-saga/effects'
import { closeQR, openQR } from '../actions/manage'
import { addNewSyncComment, addNewSyncTipping, setNewSyncComment, setNewSyncTipping, setNewSyncToken } from '../actions/manageQR'
import { faildScanQR, requestScanQR, successScanQR } from '../actions/tipping'
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
    while (true) {
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

function* doCheckTippingWorker(): SagaIterator {
    while (true) {
        yield take(openQR)
        // const state = yield select()
        const id: string = 'yGDRmCMUFqqcaDHymVL4R'
        const task = yield fork(
            firebaseSaga.firestore.syncDocument,
            'performances/' + id,
            { successActionCreator: addNewSyncTipping }
        )
        yield take(closeQR)
        yield cancel(task)
    }
}

function* doGenerateToken(): SagaIterator {
    while (true) {
        const id: string = 'yGDRmCMUFqqcaDHymVL4R'
        const hashId: string = nanoid()
        yield call(
            firebaseSaga.firestore.updateDocument,
            'performances/' + id,
            'tipping_token',
            hashId
        )
        yield put(setNewSyncToken(hashId))
        yield delay(600000)
    }
}

function* hundleGenerateToken(): SagaIterator {
    while (true) {
        yield take(openQR)
        const task = yield fork(doGenerateToken)
        yield take(closeQR)
        yield cancel(task)
    }
}

function* setNewTipping(): SagaIterator {
    while (true) {
        const comment = yield take(addNewSyncTipping)
        const data = comment.payload.data().tipping
        const state = yield select()
        const tippingSumState: number = state.tipping.performance.tippingSum
        let newTippingSum = 0
        data.map((info: any) => {
            newTippingSum += info.value
        })
        if (newTippingSum !== tippingSumState) {
            yield put(setNewSyncTipping(newTippingSum))
        }
    }
}

function* scanQRWorker(): SagaIterator {
    while (true) {
        const data = yield take(requestScanQR)
        const blob: Blob = yield dataURLtoBlob(data.payload)
        const image: any = new Image()
        image.src = blob
        const height = image.naturalHeight
        const width = image.naturalWidth
        const result = yield call(jsQR, data.payload, height, width)
        if (result) {
            yield put(notifications.success(
                {
                    autoDismiss: 5,
                    message: result.data,
                    position: 'tr',
                }
            ))
            yield put(successScanQR(result.data))
        } else {
            yield put(notifications.error(
                {
                    autoDismiss: 5,
                    message: '読み取りに失敗しました',
                    position: 'tr',
                }
            ))
            yield put(faildScanQR())
        }
    }
}

export default [
    fork(doCheckQRWorker),
    fork(setNewComment),
    fork(doCheckTippingWorker),
    fork(setNewTipping),
    fork(hundleGenerateToken),
    fork(scanQRWorker),
]