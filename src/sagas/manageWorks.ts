import dataURLtoBlob from 'dataurl-to-blob'
import { firestore } from 'firebase/app'
import 'firebase/firestore'
import nanoid from 'nanoid'
import * as notifications from 'react-notification-system-redux'
import { SagaIterator } from 'redux-saga'
import { call, fork, put, select, take } from 'redux-saga/effects'
import * as actions from '../actions/manageWorks'
import { IRegistedContent, IRegistedWorks, IRegistWorks } from '../reducers/manageWorks'
import firebaseSaga from './firebase'
import { uploadFile } from './storage'

function* doGetRegistedWorks(): SagaIterator {
    while (true) {
        yield take(actions.requestGetRegistedWorks)
        const state = yield select()
        const artistId: string = state.auth.id
        try {
            const ref: firestore.CollectionReference = firestore().collection('works')
            const snapshot: firestore.QuerySnapshot = yield call(firebaseSaga.firestore.getCollection, ref.where('artist_id', '==', artistId))
            const workses: IRegistedWorks[] = new Array()
            snapshot.forEach(doc => (
                workses.push({
                    contents: doc.data().contents,
                    discription: doc.data().discription,
                    entirePrice: doc.data().entire_price,
                    id: doc.id,
                    releasedAt: doc.data().released_at.toDate(),
                    thumbData: doc.data().thumbnail,
                    title: doc.data().name,
                    type: doc.data().type,
                })
            ))
            yield put(actions.successGetRegistedWorks(workses))
        } catch (e) {
            yield put(actions.faildGetRegistedWorks(e))
        }
    }
}

function* doRegistWorksWorker(): SagaIterator {
    while (true) {
        yield take(actions.requestRegistWorks)
        const state = yield select()
        const registData: IRegistWorks = state.manageWorks.regist
        const userId: string = state.auth.id
        const worksId: string = nanoid()
        const thumbFileName: string = nanoid() + '.png'
        const thumbPath = '/images/works/' + thumbFileName
        let registedContents: IRegistedContent[] = new Array()
        try {
            let thumbUrl: string = ''
            if (registData.thumbData) {
                const task = firebaseSaga.storage.uploadFile(thumbPath, dataURLtoBlob(registData.thumbData), { contentType: 'image/png', })
                yield task
                thumbUrl = yield call(firebaseSaga.storage.getDownloadURL, thumbPath)
            }
            registData.works.map( function* (works) {
                registedContents = yield registedContents.concat(
                    {
                        data: yield call(uploadFile, works.data),
                        name: works.title,
                        price: works.price,
                    }
                )
            })
            yield call(
                firebaseSaga.firestore.setDocument,
                'works/' + worksId,
                new Object({
                    artist_id: userId,
                    comments: new Array(),
                    contents: registedContents,
                    discription: registData.discription,
                    entire_price: registData.entirePrice,
                    name: registData.title,
                    released_at: new Date(),
                    thumbnail: thumbUrl,
                    type: registData.type,
                    updated_at: new Date(),
                }),
                {
                    merge: false,
                }
            )
            yield put(notifications.success(
                {
                    autoDismiss: 5,
                    message: '登録しました。',
                    position: 'tr',
                }
            ))
            yield put(actions.successRegistWorks(
                {
                    contents: registedContents,
                    discription: registData.discription,
                    entirePrice: registData.entirePrice,
                    id: worksId,
                    releasedAt: new Date(),
                    thumbData: registData.thumbData,
                    title: registData.title,
                    type: registData.type,
                }
            ))
        } catch (e) {
            yield put(notifications.error(
                {
                    autoDismiss: 5,
                    message: '登録に失敗しました。',
                    position: 'tr',
                }
            ))
            yield put(actions.faildRegistWorks(e))
        }
    }
}

export default [
    fork(doRegistWorksWorker),
    fork(doGetRegistedWorks),
]
