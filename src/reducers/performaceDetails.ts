import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/performanceDetails'

import exampleImage from '../natureExample.jpeg'

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
    artistId: 'hoge',
    comments: [
        {
            content: 'hogehugapiyofoo',
            createdAt: new Date('2018-12-1'),
            updatedAt: new Date('2018-12-1'),
            userId: 'hoge',
        },
        {
            content: 'hogehugapiyofoo',
            createdAt: new Date('2018-12-1'),
            updatedAt: new Date('2018-12-1'),
            userId: 'hoge',
        },
        {
            content: 'hogehugapiyofoo',
            createdAt: new Date('2018-12-1'),
            updatedAt: new Date('2018-12-1'),
            userId: 'hoge',
        },
    ],
    discription: 'One way to announce or promote a certain new product or special events is perhaps through using of vinyl banners. Large or small size of printing these vinyl banners are can be able to print and in many types of weather it can hold up extremely well.',
    findPerformance: true,
    finish: new Date(),
    geoLocate: [35.71706, 139.517882],
    locateName: '小金井公園',
    performanceTitle: 'hoge',
    start: new Date(),
    thumbnail: exampleImage,
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