import { SagaIterator } from 'redux-saga'
import { call, fork, put, select, take, takeLatest } from 'redux-saga/effects'
import { isAlphanumeric, isEmail } from 'validator'
import { requestLogin, resetAuthState } from '../actions/auth'
import { onCrop } from '../actions/cropper'
import * as dialog from '../actions/dialog'
import * as actions from '../actions/registUser'
import { requestSearch } from '../actions/searchBox'
import { closeMenu, closeRegistration } from '../actions/userMenu'
import { changeUserInfo } from './auth'
import { checkUserExists, registUserInfo } from './fireStore'
import { registUserIcon } from './storage'


function* validateIdWorker(id: any): SagaIterator {
        if(id.payload){
            yield put(actions.setIdValidating())
            const isExists:boolean = yield call(checkUserExists, id.payload)
            isAlphanumeric(id.payload) ?
                id.payload.length <= 30 ?
                    !isExists ?
                        yield put(actions.setIdPassing())
                        :
                        yield put(actions.setIdError('すでに使われているIDです'))
                    :
                    yield put(actions.setIdError('IDは30文字までです'))
                :
                yield put(actions.setIdError('半角英数字を入力してください'))
        }else{
            yield put(actions.setIdError("IDを入力してください"))
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
        yield take(requestSearch)
        const state = yield select()
        const registState: boolean = yield state.userMenu.isRegistration
        if(registState){
            yield put(actions.requestCanselRegistUser())
        }
    }
}

function* canselRegistUserWorker(): SagaIterator {
    while(true){
        yield take(actions.successCanselRegistUser)
        yield put({type:"REQUEST_DELETE_ACCOUNT"})
        yield put(closeRegistration())
        yield put(dialog.closeDialog())
    }
}

function* setCroppedDataWorker(): SagaIterator {
    while(true){
        yield take(onCrop)
        const state = yield select()
        const isRegistration: boolean = yield state.userMenu.isRegistration
        if(isRegistration){
            yield put(actions.getIconData(state.cropper.data))
        }
    }
}

function* registUserWorker(): SagaIterator {
    while(true) {
        yield take(actions.requestRegistUser)
        yield put(dialog.closeDialog())
        const state = yield select()
        const data = yield state.registUser.icon.data
        const url: string | null = yield call(registUserIcon, data)
        const uid: string = yield state.auth.uid
        const id: string = yield state.registUser.id.value
        const name: string = yield state.registUser.name.value
        const mail: string = yield state.registUser.mail.value
        const birthday: string = yield state.registUser.birthday.value
        const tags: string[] = yield state.registUser.tags.tags
        yield call(registUserInfo, uid, id, name, mail, birthday, tags, url)
        yield call(changeUserInfo, name, url, mail)
        yield put(actions.successRegistUser())
        yield put(requestLogin())
        yield put(dialog.openDialog(
            {
                buttons: [
                    {
                        action: "CLOSE_DIALOG",
                        label: "はい",
                    },
                ],
                content: "登録が完了しました。",
                title: "登録",
            }
        ))
    }
}

function* addTagWorker(): SagaIterator {
    while(true){
        const addTag = yield take(actions.requestAddTagData)
        const state = yield select()
        const tagState: string[] = yield state.registUser.tags.tags
        if(tagState.indexOf(addTag.payload) === -1){
            yield put(actions.addTagData(tagState.concat(addTag.payload)))
        }
    }
}

function* removeTagWorker(): SagaIterator {
    while(true){
        const removeTag = yield take(actions.requestRemoveTagData)
        const state = yield select()
        const tagState: string[] = yield state.registUser.tags.tags
        const searchTagIndex: number = tagState.indexOf(removeTag.payload)
        tagState.splice(searchTagIndex, 1)
        yield put(actions.removeTagData(tagState))
    }
}

function* successRegistUserWorker(): SagaIterator {
    while(true){
        yield take(actions.successRegistUser)
        yield put(resetAuthState())
        yield put(closeRegistration())
        yield put(closeMenu())
    }
}

export default [
    takeLatest(actions.getIdValue, validateIdWorker),
    fork(validateNameWorker),
    fork(validateMailWorker),
    fork(canselRegistUserWorker),
    fork(canselRegistUserDialog),
    fork(canselRegistBeforeSearch),
    fork(faildCancelRegistUser),
    fork(setCroppedDataWorker),
    fork(registUserWorker),
    fork(addTagWorker),
    fork(removeTagWorker),
    fork(successRegistUserWorker),
]