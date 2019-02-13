import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/cropper'

interface ICropper {
    data: string
    isOpen: boolean
    type: 'icon' | 'works'
}

export interface ICropperState{
    cropper: ICropper
}

const initialReduceAuthState: ICropper = {
    data: '',
    isOpen: false,
    type: 'icon',
}

export default reducerWithInitialState(initialReduceAuthState)
    .case(actions.onCrop, (state: ICropper, payload): ICropper => ({
        ...state,
        data: payload,
        isOpen: false,
    }))
    .case(actions.openCropper, (state: ICropper, payload): ICropper => ({
        ...state,
        ...payload,
        isOpen: true,
    }))
    .case(actions.closeCropper, (state: ICropper): ICropper => ({
        ...state,
        isOpen: false,
    }))
    .build()