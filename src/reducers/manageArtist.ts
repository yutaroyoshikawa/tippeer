import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/manageArtist'

interface IManageArtist extends actions.IArtistInfo {
    isLoad: boolean
    isRegisting: boolean
    isChangeTopImage: boolean
}

export interface IManageArtistState {
    manageArtist: IManageArtist
}

const initialReduceManageArtistState: IManageArtist = {
    isChangeTopImage: false,
    isLoad: false,
    isRegisting: false,
    selfIntroduction: '',
    title: '',
    topImage: '',
}

export default reducerWithInitialState(initialReduceManageArtistState)
    .case(actions.requestGetManageArtist, (state: IManageArtist): IManageArtist => ({
        ...state,
        isLoad: true,
    }))
    .case(actions.successGetManageArtist, (state: IManageArtist, payload): IManageArtist => ({
        ...state,
        ...payload,
        isLoad: false,
    }))
    .case(actions.faildGetManageArtist, (state: IManageArtist): IManageArtist => ({
        ...state,
        isLoad: false,
    }))
    .case(actions.setRegistArtistTitle, (state: IManageArtist, payload): IManageArtist => ({
        ...state,
        title: payload,
    }))
    .case(actions.setRegistArtistSelfIntroduction, (state: IManageArtist, payload): IManageArtist => ({
        ...state,
        selfIntroduction: payload,
    }))
    .case(actions.setRegistArtistThumb, (state: IManageArtist, payload): IManageArtist => ({
        ...state,
        topImage: payload,
    }))
    .case(actions.requestRegistManageArtist, (state: IManageArtist): IManageArtist => ({
        ...state,
        isRegisting: true,
    }))
    .case(actions.successRegistManageArtist, (state: IManageArtist): IManageArtist => ({
        ...state,
        isRegisting: false,
    }))
    .case(actions.faildRegistManageArtist, (state: IManageArtist): IManageArtist => ({
        ...state,
        isRegisting: false,
    }))
    .case(actions.changeTopImage, (state: IManageArtist): IManageArtist => ({
        ...state,
        isChangeTopImage: true,
    }))
    .build()
