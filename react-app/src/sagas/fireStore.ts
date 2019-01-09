import * as notifications from 'react-notification-system-redux'
import { SagaIterator } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import * as authActions from '../actions/auth'
import * as dialog from '../actions/dialog'
import { closeDialog } from '../actions/dialog'
import * as registActions from '../actions/registUser'
import { openMenu, openRegistration } from '../actions/userMenu'
import firebaseSaga from './firebase'

function* doRegistUser(): SagaIterator {
    while(true){
        const user = yield take(registActions.requestRegistUser)
        const doc = yield call(
            firebaseSaga.firestore.addDocument, 'users', {...user}
        )
        doc ?
            put(registActions.successRegistUser)
            :
            put(registActions.faildRegistUser)
    }
}

function* doCheckUsersExists(): SagaIterator {
    while(true){
        const user: authActions.ICurrentUser = yield take(authActions.successCurrenUserInfo)
        user.displayName ? 
            yield put(authActions.existsUser())
            :
            yield put(authActions.noExistsUser())
    }
}

function* doDetermineAleart(): SagaIterator {
    while(true) {
        yield take(authActions.noExistsUser)
        const state = yield select()
        const authState = yield state.auth.authState
        if(authState !== 'regist'){
            yield put(authActions.registRequestAlert())
        }
    }
}

function* doRegist(): SagaIterator {
    while(true){
        yield take("REQUEST_REGISTRATION")
        yield put(openRegistration())
        yield put(openMenu())
        yield put(closeDialog())
    }
}

function* doRequestRegistAleart(): SagaIterator {
    while(true) {
        yield take(authActions.registRequestAlert)
        yield put(dialog.openDialog(
            {
                buttons: [
                    {
                        action: "REQUEST_REGISTRATION",
                        label: "はい"
                    },
                    {
                        action: "SUCCESS_CANSEL_REGIST_USER",
                        label: "いいえ"
                    },
                ],
                content: "アカウント情報が登録されていません。登録しますか？",
                onClose: "SUCCESS_CANSEL_REGIST_USER",
                title: "登録",
            }
        ))
    }
}

function* loginCompleteAleart(): SagaIterator {
    while(true) {
        yield take(authActions.existsUser)
        const state = yield select()
        const uid = yield state.auth.uid
        yield put(notifications.show(
            {
                autoDismiss: 5,
                message: uid + 'としてログインしました。',
                position: 'tr',
                title: 'ログイン',
            },
            'success',
        ))
    }
}

// function* doAlertAppearance(): SagaIterator {
//     while(true) {

//     }
// }

export default [
    fork(doRegistUser),
    fork(doCheckUsersExists),
    fork(doDetermineAleart),
    fork(loginCompleteAleart),
    fork(doRequestRegistAleart),
    fork(doRegist),
]