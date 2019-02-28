import { firestore } from 'firebase/app'
import * as notifications from 'react-notification-system-redux'
import { SagaIterator } from 'redux-saga'
import { call, delay, fork, put, select, take } from 'redux-saga/effects'
import { openDialog } from '../actions/dialog'
import * as actions from '../actions/tipping'
import firebaseSaga from './firebase'
import { getTippingPerformance } from './fireStore'

function* doGetTippingPerformanceWorker(): SagaIterator {
    while (true) {
        const tippingToken = yield take(actions.requestGetTippingPerformance)
        try {
            const token: string = tippingToken.payload
            const snapshot = yield call(getTippingPerformance, token.substr(28))
            const performance = snapshot.data()
            yield put(actions.successGetTippingPerformance(
                {
                    artistId: performance.artist_id,
                    finish: performance.finish.toDate(),
                    id: snapshot.id,
                    name: performance.name,
                    start: performance.start.toDate(),
                }
            ))
        } catch (e) {
            yield put(actions.setComponent('top'))
            yield put(notifications.error(
                {
                    autoDismiss: 10,
                    message: 'パフォーマンスの取得に失敗しました。',
                    position: 'tr',
                }
            ))
            yield put(actions.faildGetTippingPerformance())
        }
    }
}

function* doCheckTipping() {
    while(true) {
        const paying = yield take(actions.setIsBack)
        if(!paying.payload){
            yield delay(700)
            const state = yield select()
            const tippingValue = state.tipping.tippingValue
            const performanceId: string = state.tipping.performance.id
            const userId: string = state.auth.id
            if(tippingValue === 0){
                yield put(actions.initializePaying())
                yield put(openDialog(
                    {
                        buttons: [
                            {
                                action: "CLOSE_DIALOG",
                                label: "はい"
                            }
                        ],
                        content: "投げ銭額を入力してください",
                        title: "エラー",
                    }
                ))
            }else{
                yield call(
                    firebaseSaga.firestore.updateDocument,
                    'performances/' + performanceId,
                    'tipping',
                    firestore.FieldValue.arrayUnion(
                        {
                            tipping_at: new Date(),
                            user_id: userId,
                            value: tippingValue,
                        }
                    )
                )
                yield put(actions.setComponent('thanks'))
                yield delay(3000)
                yield put(actions.setComponent('result'))
            }   
        }
    }
}

export default [
    fork(doGetTippingPerformanceWorker),
    fork(doCheckTipping),
]