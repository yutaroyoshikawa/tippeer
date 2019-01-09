import * as firebase from 'firebase'
import * as notifications from 'react-notification-system-redux'
import { SagaIterator } from 'redux-saga'
import { call, fork, put, take } from 'redux-saga/effects'
import * as actions from '../actions/auth'
import { getAgentInfo } from '../actions/globalMenu'
import firebaseSaga from './firebase'

function onAuthStateChanged() {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => (
            user ? resolve(user) : reject(new Error('Ops!'))
        ))
    })
}

function* doHideAuthWorker():SagaIterator {
    while(true){
        yield take(actions.successCurrenUserInfo)
        yield put(actions.hideAuth())
    }
}

function* doInitializeAuthWorker():SagaIterator {
    while(true){
        yield take(getAgentInfo)
        try{
            const user:firebase.User = yield call(onAuthStateChanged)
            yield put(actions.successCurrenUserInfo(
                {
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    photoURL: user.photoURL,
                    uid: user.uid,
                }
            ))
        }catch(e) {
            yield put(actions.failureCurrentUserInfo({errorMsg: e}))
        }
    }
}

function* doLogoutWorker():SagaIterator {
    while(true){
        yield take(actions.requestLogout)
        try{
            yield call(firebaseSaga.auth.signOut)
            yield put(actions.successLogout())
        }catch(e){
            yield put(actions.failureLogout())
        }
        
    }
}

function* doLogoutNotifify(): SagaIterator {
    while(true) {
        yield take(actions.successLogout)
        yield put(notifications.success(
            {
                autoDismiss: 5,
                message: 'ログアウトしました。',
                position: 'tr',
            }
        ))
    }
}

export default [
    fork(doInitializeAuthWorker),
    fork(doLogoutWorker),
    fork(doHideAuthWorker),
    fork(doLogoutNotifify),
]