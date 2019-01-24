import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/worksDetails'

import thumbnail from '../popVirus.jpg'

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
    price: number
    description: string
    contents: IContents[]
    comments: IWorksComments[]
}

export interface IWorksDetailsState {
    worksDetails: IWorksDetails
}

const initialReduceUserMenuState: IWorksDetails = {
    artistId: 'hoge',
    comments: [
        {
            content: 'hogehugapiyofoo',
            createdAt: new Date('12/12/12'),
            score: 4,
            updatedAt: new Date('12/12/12'),
            userId: 'hoge',
        },
        {
            content: 'hogehugapiyofoo',
            createdAt: new Date('12/12/12'),
            score: 4,
            updatedAt: new Date('12/12/12'),
            userId: 'hoge',
        },
        {
            content: 'hogehugapiyofoo',
            createdAt: new Date('12/12/12'),
            score: 4,
            updatedAt: new Date('12/12/12'),
            userId: 'hoge',
        },
    ],
    contents: [
        {
            artistId: 'hoge',
            price: 300,
            title: 'hoge',
        },
        {
            artistId: 'hoge',
            price: 300,
            title: 'hogehogehoge',
        },
        {
            artistId: 'hoge',
            price: 300,
            title: 'hogehoge',
        },
        {
            artistId: 'hoge',
            price: 300,
            title: 'hoge',
        },
        {
            artistId: 'hoge',
            price: 300,
            title: 'hoge',
        },
    ],
    description: 'One way to announce or promote a certain new product or special events is perhaps through using of vinyl banners. Large or small size of printing these vinyl banners are can be able to print and in many types of weather it can hold up extremely well.',
    price: 1200,
    worksThumbnail: thumbnail,
    worksTitle: 'POP VIRUS',
}



export default reducerWithInitialState(initialReduceUserMenuState)
    .case(actions.successGetWorksInfo, (state: IWorksDetails, payload): IWorksDetails => ({
        ...state,
        ...payload,
    }))
    .build()