import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/performanceDetails'

export interface IComments {
    content: string
    createdAt: Date
    userId: string
    updatedAt: Date
}

export interface IPerformanceDetails {
    address: string
    performanceTitle: string
    start: Date
    findPerformance: boolean
    finish: Date
    discription: string
    artistId: string
    thumbnail: string
    comments: IComments[]
    locateName: string
    geoLocate: number[]
}

export interface IPerformanceDetailsState {
    performanceDetails: IPerformanceDetails
}

const initialReducePerformanceDetailsState: IPerformanceDetails = {
    address: "",
    artistId: '',
    comments: new Array(),
    discription: '',
    findPerformance: true,
    finish: new Date(),
    geoLocate: new Array(),
    locateName: '',
    performanceTitle: '',
    start: new Date(),
    thumbnail: '',
}

export default reducerWithInitialState(initialReducePerformanceDetailsState)
    .case(actions.successPerformanceInfo, (state: IPerformanceDetails, payload) => ({
        ...state,
        ...payload,
    }))
    .case(actions.faildPerformanceInfo, (state: IPerformanceDetails) => ({
        ...state,
        findPerformance: false,
    }))
    .case(actions.addNewComment, (state: IPerformanceDetails, payload): IPerformanceDetails => ({
        ...state,
        comments: payload,
    }))
    .build()