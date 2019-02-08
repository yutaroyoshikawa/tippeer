import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/initialLoad'

interface IInitialLoad {
    isHideFlag: boolean
    isPlayMusic: boolean
    isShow: boolean
}

export interface IInitialLoadState {
    initialLoad: IInitialLoad
}

const initialReduceInitialLoadState: IInitialLoad = {
    isHideFlag: false,
    isPlayMusic: false,
    isShow: true,
}

export default reducerWithInitialState(initialReduceInitialLoadState)
    .case(actions.hideLoad, (state: IInitialLoad): IInitialLoad => ({
        ...state,
        isHideFlag: true,
    }))
    .case(actions.showLoad, (state: IInitialLoad): IInitialLoad => ({
        ...state,
        isHideFlag: false,
    }))
    .case(actions.doHide, (state: IInitialLoad): IInitialLoad => ({
        ...state,
        isShow: false,
    }))
    .case(actions.playMusic, (state: IInitialLoad): IInitialLoad => ({
        ...state,
        isPlayMusic: true,
    }))
    .case(actions.stopMusic, (state: IInitialLoad): IInitialLoad => ({
        ...state,
        isPlayMusic: false,
    }))
    .build()
