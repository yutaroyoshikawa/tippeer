import { delay, SagaIterator } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import { isEmail } from 'validator'
import { requestLogout } from '../actions/auth'
import * as dialog from '../actions/dialog'
import * as actions from '../actions/registUser'
import { Search } from '../actions/search'
import { closeRegistration } from '../actions/userMenu'

function* validateIdWorker(): SagaIterator {
    while(true){
        yield take(actions.getIdValue)
        yield put(actions.setIdValidating())
        yield call(delay, 1000)
        const state = yield select()
        const idValue = yield state.registUser.id.value
        idValue ?
            yield put(actions.setIdPassing())
            :
            yield put(actions.setIdError('IDを入力してください'))
    }
}

function* validateNameWorker(): SagaIterator {
    while(true){
        yield take(actions.getNameValue)
        yield put(actions.setNameValidating())
        const state = yield select()
        const nameValue = yield state.registUser.name.value
        nameValue ?
            yield put(actions.setNamePassing())
            :
            yield put(actions.setNameError('名前を入力してください'))
    }
}

function* validateMailWorker(): SagaIterator {
    while(true){
        yield take(actions.getMailValue)
        yield put(actions.setMailValidating())
        const state = yield select()
        const mailValue: string = yield state.registUser.mail.value
        isEmail(mailValue) ?
            yield put(actions.setMailPassing())
            :
            yield put(actions.setMailError('メールアドレスが正しくありません'))
    }
}

function* canselRegistUserDialog(): SagaIterator {
    while(true) {
        yield take(actions.requestCanselRegistUser)
        yield put(dialog.openDialog(
            {
                buttons: [
                    {
                        action: "SUCCESS_CANSEL_REGIST_USER",
                        label: "はい",
                    },
                    {
                        action: "FAILD_CANSEL_REGIST_USER",
                        label: "いいえ",
                    }
                ],
                content: "アカウント登録をやめますか？",
                onClose: "FAILD_CANSEL_REGIST_USER",
                title: "登録",
            }
        ))
    }
}

function* faildCancelRegistUser(): SagaIterator {
    while(true) {
        yield take(actions.faildCanselRegistUser)
        yield put(actions.requestRegistration())
        yield put(dialog.closeDialog())
    }
}

function* canselRegistBeforeSearch(): SagaIterator {
    while(true) {
        yield take(Search)
        yield put(actions.requestCanselRegistUser())
    }
}

function* canselRegistUserWorker(): SagaIterator {
    while(true){
        yield take(actions.successCanselRegistUser)
        yield put(requestLogout())
        yield put(closeRegistration())
        yield put(dialog.closeDialog())
    }
}

export default [
    fork(validateIdWorker),
    fork(validateNameWorker),
    fork(validateMailWorker),
    fork(canselRegistUserWorker),
    fork(canselRegistUserDialog),
    fork(canselRegistBeforeSearch),
    fork(faildCancelRegistUser),
]