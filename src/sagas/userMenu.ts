import { SagaIterator } from 'redux-saga'
import { fork, put, take } from 'redux-saga/effects'
import { hideMobileMenu, showMobileMenu } from '../actions/mobileMenu'
import * as actions from '../actions/userMenu'

function* doHideMenuWorker(): SagaIterator {
    while (true) {
        yield take(actions.openMenu)
        yield put(hideMobileMenu())
    }
}

function* doShowMenuWorker(): SagaIterator {
    while(true) {
        yield take(actions.closeMenu)
        yield put(showMobileMenu())
    }
}

export default [
    fork(doHideMenuWorker),
    fork(doShowMenuWorker),
]