import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/worksTop'

export interface ISpotlight {
    worksId: string,
    thumbnail: string,
    artistId: string,
    worksTitle: string
}

export interface IWorkses {
    spotlight: [
        ISpotlight,
        ISpotlight,
        ISpotlight,
        ISpotlight
    ],
    followArtists: string[],
    recommend: string[],
    newReleace: string[],
    runking: string[],
}

interface IWorksTop extends IWorkses {
    isLoad: boolean
}

export interface IWorksTopState {
    worksTop: IWorksTop
}

const initialReduceWorksTopState: IWorksTop = {
    followArtists: new Array(),
    isLoad: false,
    newReleace: new Array(),
    recommend: new Array(),
    runking: new Array(),
    spotlight: [
        {
            artistId: '',
            thumbnail: '',
            worksId: '',
            worksTitle: '',
        },
        {
            artistId: '',
            thumbnail: '',
            worksId: '',
            worksTitle: '',
        },
        {
            artistId: '',
            thumbnail: '',
            worksId: '',
            worksTitle: '',
        },
        {
            artistId: '',
            thumbnail: '',
            worksId: '',
            worksTitle: '',
        },
    ],
}

export default reducerWithInitialState(initialReduceWorksTopState)
    .case(actions.requestGetWorksTopInfo, (state: IWorksTop): IWorksTop => ({
        ...state,
        isLoad: true,
    }))
    .case(actions.successGetWorksTopInfo, (state: IWorksTop, payload): IWorksTop => ({
        ...state,
        ...payload,
        isLoad: false,
    }))
    .case(actions.faildGetWorksTopInfo, (state: IWorksTop): IWorksTop => ({
        ...state,
        isLoad: false,
    }))
    .build()