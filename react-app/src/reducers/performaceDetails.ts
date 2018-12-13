import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/performanceDetails'

import exampleImage from '../natureExample.jpeg'

interface IComments {
    content: string
    userId: string
    postDate: string
}

export interface IPerformanceDetails {
    performanceTitle: string
    start: string
    finish: string
    discription: string
    artistId: string
    placeId: number
    thumbnail: string
    comments: IComments[]
}

export interface IPerformanceDetailsState {
    performanceDetails: IPerformanceDetails
}

const initialReducePerformanceDetailsState: IPerformanceDetailsState = {
    performanceDetails: {
        artistId: 'hoge',
        comments: [
            {
                content: 'hogehugapiyofoo',
                postDate: '2018-12-1',
                userId: 'hoge',
            },
            {
                content: 'hogehugapiyofoo',
                postDate: '2018-12-1',
                userId: 'hoge',
            },
            {
                content: 'hogehugapiyofoo',
                postDate: '2018-12-1',
                userId: 'hoge',
            },
        ],
        discription: 'One way to announce or promote a certain new product or special events is perhaps through using of vinyl banners. Large or small size of printing these vinyl banners are can be able to print and in many types of weather it can hold up extremely well.',
        finish: '2018-12-01-12:59',
        performanceTitle: 'hoge',
        placeId: 1,
        start: '2018-12-01-15:59',
        thumbnail: exampleImage,
    }
}

export default reducerWithInitialState(initialReducePerformanceDetailsState)
    .case(actions.successPerformanceInfo, (state: IPerformanceDetailsState, payload) => ({
        ...state,
        performanceDetails: payload
    }))
    .build()