import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/worksDetails'

export interface IContents {
    title: string
    artistId: string
    price: number
}

export interface IWorksComments {
    content: string
    userId: string
    score: number
    createdAt: Date
    updatedAt: Date
}

export interface IPerformanceComments {
    content: string
    userId: string
    createdAt: Date
    updatedAt: Date
}

interface IWorksDetails {
    worksTitle: string
    artistId: string
    worksThumbnail: string
    entirePrice: number
    score: number
    description: string
    contents: IContents[]
    comments: IWorksComments[]
    isFind: boolean
    isLoad: boolean
}

export interface IWorksDetailsState {
    worksDetails: IWorksDetails
}

const initialReduceUserMenuState: IWorksDetails = {
    artistId: '',
    comments: new Array(),
    contents: new Array(),
    description: '',
    entirePrice: 0,
    isFind: false,
    isLoad: false,
    score: 0,
    worksThumbnail: '',
    worksTitle: '',
}



export default reducerWithInitialState(initialReduceUserMenuState)
    .case(actions.requestFindWorksInfo, (state: IWorksDetails): IWorksDetails => ({
        ...state,
        isLoad: true,
    }))
    .case(actions.findWorksInfo, (state: IWorksDetails): IWorksDetails => ({
        ...state,
        isFind: true,
    }))
    .case(actions.notFindWorksInfo, (state: IWorksDetails): IWorksDetails => ({
        ...state,
        isFind: false,
    }))
    .case(actions.successLoad, (state: IWorksDetails): IWorksDetails => ({
        ...state,
        isLoad: false,
    }))
    .case(actions.setAverageScore, (state: IWorksDetails, payload): IWorksDetails => ({
        ...state,
        score: payload,
    }))
    .case(actions.setBaseWorksInfo, (state: IWorksDetails, payload): IWorksDetails => ({
        ...state,
        ...payload,
    }))
    .case(actions.setComments, (state: IWorksDetails, payload) => ({
        ...state,
        comments: payload,
    }))
    .case(actions.setContents, (state: IWorksDetails, payload): IWorksDetails => ({
        ...state,
        contents: payload,
    }))
    .case(actions.addNewWorksComment, (state: IWorksDetails, payload): IWorksDetails => ({
        ...state,
        comments: payload,
    }))
    .build()