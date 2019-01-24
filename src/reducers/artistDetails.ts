import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/artistDetails'
import { IPerformanceComments } from './worksDetails'

import top from 'src/topImage.jpg'

export interface IBiography {
    content: string
    date: Date
}

interface IPerformance {
    finish: Date,
    id: string
    name: string
    placeId: string
    placeName: string
    start: Date
    thumbnail: string
}

export interface IArtistDetails {
    artistName: string
    findArtist: boolean
    selfIntroduction: string
    jobTitle: string
    performanceHistories: IPerformance[]
    plannedPerformances: IPerformance[]
    subscribeCount: number
    topImage: string
    biography: IBiography[]
    biographyLoad: boolean
    recentlyPerformance: {
        description: string
        id: string
        title: string
        start: Date
        finish: Date
        placeName: string
        address: string
        postalCode: string
        comments: IPerformanceComments[]
    }
    subscribeState: boolean
    loading: boolean
    notifyState: boolean
    isRecentlyPerform: boolean
}

export interface IArtistDetailsState {
    artistDetails: IArtistDetails
}

const initialReduceArtistDetailsState: IArtistDetails = {
    artistName: 'hoge',
    biography: [
        {
            content: '',
            date: new Date('12/12/12'),
        }
    ],
    biographyLoad: false,
    findArtist: true,
    isRecentlyPerform: false,
    jobTitle: 'mediaArtist',
    loading: false,
    notifyState: false,
    performanceHistories: [],
    plannedPerformances: [],
    recentlyPerformance: {
        address: '',
        comments: [
            {
                content: 'hogehugapiyofoo',
                createdAt: new Date('12/12/12'),
                updatedAt: new Date('12/12/12'),
                userId: 'hoge'
            },
            {
                content: 'hogehugapiyofoo',
                createdAt: new Date('12/12/12'),
                updatedAt: new Date('12/12/12'),
                userId: 'hoge'
            },
            {
                content: 'hogehugapiyofoo',
                createdAt: new Date('12/12/12'),
                updatedAt: new Date('12/12/12'),
                userId: 'hoge'
            },
        ],
        description: 'One way to announce or promote a certain new product or special events is perhaps through using of vinyl banners. Large or small size of printing these vinyl banners are can be able to print and in many types of weather it can hold up extremely well.',
        finish: new Date('12/12/12'),
        id: 'hoge',
        placeName: 'hoge',
        postalCode: '123-1234',
        start: new Date('12/12/12'),
        title: 'hoge',
    },
    selfIntroduction: 'One way to announce or promote a certain new product or special events is perhaps through using of vinyl banners. Large or small size of printing these vinyl banners are can be able to print and in many types of weather it can hold up extremely well.',
    subscribeCount: 100,
    subscribeState: false,
    topImage: top,
}

export default reducerWithInitialState(initialReduceArtistDetailsState)
    .case(actions.requestGetArtistInfo, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        loading: true,
    }))
    .case(actions.findArtistInfo, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        findArtist: true,
    }))
    .case(actions.notFindArtistInfo, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        findArtist: false,
        loading: false,
    }))
    .case(actions.successLoading, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        loading: false,
    }))
    .case(actions.setArtistDetails, (state: IArtistDetails, payload): IArtistDetails => ({
        ...state,
        ...payload,
    }))
    .case(actions.setPerformanceHistories, (state: IArtistDetails, payload): IArtistDetails => ({
        ...state,
        performanceHistories: payload,
    }))
    .case(actions.setPlannedPerformances, (state: IArtistDetails, payload): IArtistDetails => ({
        ...state,
        plannedPerformances: payload,
    }))
    .case(actions.findRecentPerformance, (state: IArtistDetails, payload): IArtistDetails => ({
        ...state,
        isRecentlyPerform: true,
        recentlyPerformance: payload,
    }))
    .case(actions.notFindRecentPerformance, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        isRecentlyPerform: false,
    }))
    .case(actions.setUserSettings, (state: IArtistDetails, payload: any): IArtistDetails => ({
        ...state,
        ...payload,
    }))
    .case(actions.successBiography, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        biographyLoad: true,
    }))
    .case(actions.successNotify, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        notifyState: true,
    }))
    .case(actions.successSubscribe, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        subscribeCount: ++state.subscribeCount,
        subscribeState: true,
    }))
    .case(actions.successUnsubscribe, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        subscribeCount: --state.subscribeCount,
        subscribeState: false,
    }))
    .case(actions.successUnnotify, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        notifyState: false,
    }))
    .build()