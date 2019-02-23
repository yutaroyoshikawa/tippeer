import { SagaIterator } from 'redux-saga'
import { fork, put, select, take } from 'redux-saga/effects'
import { cropType, onCrop } from '../actions/cropper'
import { setRegistPerformanceThumb } from '../actions/managePerformance'
import { setRegistWorksThumb } from '../actions/manageWorks'

function* setCroppedDataWorker(): SagaIterator {
    while(true){
        yield take(onCrop)
        const state = yield select()
        const CropType: cropType = state.cropper.type
        const croppedData = state.cropper.data
        switch(CropType) {
            case 'performance' :
                yield put(setRegistPerformanceThumb(croppedData))
            case 'works' :
                yield put(setRegistWorksThumb(croppedData))
        }
    }
}

export default [
    fork(setCroppedDataWorker),
]
