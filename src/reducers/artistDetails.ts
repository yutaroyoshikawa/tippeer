import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/artistDetails'
import { IPerformanceComments } from './worksDetails'

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
    isLoadFollow: boolean
    isLoadNotify: boolean
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
    uid: string
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
    artistName: '',
    biography: [
        {
            content: '',
            date: new Date(),
        }
    ],
    biographyLoad: false,
    findArtist: true,
    isLoadFollow: false,
    isLoadNotify: false,
    isRecentlyPerform: false,
    jobTitle: '',
    loading: false,
    notifyState: false,
    performanceHistories: [],
    plannedPerformances: [],
    recentlyPerformance: {
        address: '',
        comments: [
            {
                content: '',
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: ''
            },
            {
                content: '',
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: ''
            },
            {
                content: '',
                createdAt: new Date(),
                updatedAt: new Date(),
                userId: ''
            },
        ],
        description: '',
        finish: new Date(),
        id: '',
        placeName: '',
        postalCode: '',
        start: new Date(),
        title: '',
    },
    selfIntroduction: '',
    subscribeCount: 0,
    subscribeState: false,
    topImage: '',
    uid: '',
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
        isLoadNotify: false,
        notifyState: true,
    }))
    .case(actions.successSubscribe, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        isLoadFollow: false,
        subscribeCount: ++state.subscribeCount,
        subscribeState: true,
    }))
    .case(actions.successUnsubscribe, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        isLoadFollow: false,
        subscribeCount: --state.subscribeCount,
        subscribeState: false,
    }))
    .case(actions.successUnnotify, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        isLoadNotify: false,
        notifyState: false,
    }))
    .case(actions.requestFollow, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        isLoadFollow: true,
    }))
    .case(actions.requestUnfollow, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        isLoadFollow: true,
    }))
    .case(actions.requestNotify, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        isLoadNotify: true,
    }))
    .case(actions.requestUnnotify, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        isLoadNotify: true,
    }))
    .case(actions.faildNotify, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        isLoadNotify: false,
    }))
    .case(actions.faildUnnotify, (state: IArtistDetails): IArtistDetails => ({
        ...state,
        isLoadNotify: false,
    }))
    .build()