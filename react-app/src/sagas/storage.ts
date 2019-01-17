import dataURLtoBlob from 'dataurl-to-blob'
import nanoid from 'nanoid'
import { call } from 'redux-saga/effects'
import firebaseSaga from './firebase'

export function* getItemAccessUrl(path: string) {
    const url = yield call(firebaseSaga.storage.getDownloadURL, path)

    return url
}

export function* registUserIcon(data: string) {
    let downloadUrl: string | null = ''

    if(data){
        const name = nanoid(128) + '.png'
        const path = '/images/icons/' + name
        const task = firebaseSaga.storage.uploadFile(path, dataURLtoBlob(data), {contentType: 'image/png',})
        yield task
        downloadUrl = yield getItemAccessUrl(path)
        
    }else {
        downloadUrl = null
    }

    return downloadUrl
}