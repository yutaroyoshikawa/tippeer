import dataURLtoBlob from 'dataurl-to-blob'
import { firestore } from 'firebase/app'
import 'firebase/firestore'
import nanoid from 'nanoid'
import * as notifications from 'react-notification-system-redux'
import { SagaIterator } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import * as actions from '../actions/manageArtist'
import firebaseSaga from './firebase'

function* doGetManageArtist(): SagaIterator {
    while(true) {
        yield take(actions.requestGetManageArtist)
        const state = yield select()
        const uid: string = state.auth.uid
        try{
            const snapshot: firestore.QueryDocumentSnapshot = yield call(firebaseSaga.firestore.getDocument, 'users/' + uid)
            const artistInfo: actions.IArtistInfo = {
                selfIntroduction: snapshot.data().self_introduction,
                title: snapshot.data().job_title,
                topImage: snapshot.data().top_image,
            }
            yield put(actions.successGetManageArtist(artistInfo))
        }catch(e) {
            yield put(actions.faildGetManageArtist(e))
        }
    }
}

function* doRegistManageArtistWorker(): SagaIterator {
    while(true){
        yield take(actions.requestRegistManageArtist)
        const state = yield select()
        const uid: string = state.auth.uid
        const title: string = state.manageArtist.title
        const topImage: string = state.manageArtist.topImage
        const selfIntroduction: string = state.manageArtist.selfIntroduction
        const isChangeTopImg: boolean = state.manageArtist.isChangeTopImage
        const thumbFileName: string = nanoid() + '.png'
        const thumbPath = '/images/artist/topImage/' + thumbFileName
        try{
            let thumbUrl: string = ''
            if(isChangeTopImg) {
                if(topImage){
                    const task = firebaseSaga.storage.uploadFile(thumbPath, dataURLtoBlob(topImage), {contentType: 'image/png',})
                    yield task
                    thumbUrl = yield call(firebaseSaga.storage.getDownloadURL, thumbPath)
                }
            }else{
                thumbUrl = topImage
            }
            yield call(
                firebaseSaga.firestore.updateDocument,
                'users/' + uid,
                {
                    job_title: title,
                    self_introduction: selfIntroduction,
                    top_image: thumbUrl,
                }
            )
            yield put(notifications.success(
                {
                    autoDismiss: 5,
                    message: '登録しました。',
                    position: 'tr',
                }
            ))
            yield put(actions.successRegistManageArtist())
        }catch(e){
            yield put(notifications.error(
                {
                    autoDismiss: 5,
                    message: '登録に失敗しました。',
                    position: 'tr',
                }
            ))
            yield put(actions.faildRegistManageArtist(e))
        }
    }
}

export default [
    fork(doRegistManageArtistWorker),
    fork(doGetManageArtist),
]