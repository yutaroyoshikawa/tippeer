import { SagaIterator } from 'redux-saga'
import { call, delay, fork, put, select, take } from 'redux-saga/effects'
import { openDialog } from '../actions/dialog'
import * as actions from '../actions/tipping'
import { getTippingPerformance } from './fireStore'

function* doGetTippingPerformanceWorker(): SagaIterator {
    while (true) {
        const tippingToken = yield take(actions.requestGetTippingPerformance)
        try {
            const snapshot = yield call(getTippingPerformance, tippingToken.payload)
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
            const tippingValue = yield state.tipping.tippingValue
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