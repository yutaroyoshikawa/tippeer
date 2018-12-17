import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/artistDetails'
import { IPerformanceComments } from './worksDetails'

import top from 'src/topImage.jpg'

export interface IBiography {
    date: string
    content: string
}

interface IArtistDetails {
    artistName: string
    selfIntroduction: string
    jobTitle: string
    performanceHistory: number[]
    subscribeCount: number
    topImage: string
    biography: IBiography[]
    initLoad: boolean
    biographyLoad: boolean
    recentlyPerformanceDescription: string
    recentlyPerformanceId: number
    recentlyPerformanceTitle: string
    recentlyPerformanceStart: string
    recentlyPerformanceFinish: string
    recentlyPerformancePlaceId: number
    recentlyPerformanceComments: IPerformanceComments[]
    recommendWorks: number[]
    subscribeState: boolean
    notifyState: boolean
}

export interface IArtistDetailsState {
    artistDetails: IArtistDetails
}

const initialReduceArtistDetailsState: IArtistDetailsState = {
    artistDetails: {
        artistName: 'hoge',
        biography: [
            {
                content: '',
                date: '',
            }
        ],
        biographyLoad: false,
        initLoad: false,
        jobTitle: 'mediaArtist',
        notifyState: false,
        performanceHistory: [1, 2, 3, 4, 5],
        recentlyPerformanceComments: [
            {
                content: 'hogehugapiyofoo',
                postDate: '2018-12-1',
                userId: 'hoge'
            },
            {
                content: 'hogehugapiyofoo',
                postDate: '2018-12-1',
                userId: 'hoge'
            },
            {
                content: 'hogehugapiyofoo',
                postDate: '2018-12-1',
                userId: 'hoge'
            },
        ],
        recentlyPerformanceDescription: 'One way to announce or promote a certain new product or special events is perhaps through using of vinyl banners. Large or small size of printing these vinyl banners are can be able to print and in many types of weather it can hold up extremely well.',
        recentlyPerformanceFinish: '2018-12-01-12:59',
        recentlyPerformanceId: 1,
        recentlyPerformancePlaceId: 1,
        recentlyPerformanceStart: '2018-12-01-13:59',
        recentlyPerformanceTitle: 'hoge',
        recommendWorks: [1, 2, 3, 4, 5],
        selfIntroduction: 'One way to announce or promote a certain new product or special events is perhaps through using of vinyl banners. Large or small size of printing these vinyl banners are can be able to print and in many types of weather it can hold up extremely well.',
        subscribeCount: 100,
        subscribeState: false,
        topImage: top,
    }
}

export default reducerWithInitialState(initialReduceArtistDetailsState)
    .case(actions.getArtistInfo, (state: IArtistDetailsState): IArtistDetailsState => ({
        ...state,
        artistDetails: {
            artistName: state.artistDetails.artistName,
            biography: state.artistDetails.biography,
            biographyLoad: state.artistDetails.biographyLoad,
            initLoad: true,
            jobTitle: state.artistDetails.jobTitle,
            notifyState: state.artistDetails.notifyState,
            performanceHistory: state.artistDetails.performanceHistory,
            recentlyPerformanceComments: state.artistDetails.recentlyPerformanceComments,
            recentlyPerformanceDescription: state.artistDetails.recentlyPerformanceDescription,
            recentlyPerformanceFinish: state.artistDetails.recentlyPerformanceFinish,
            recentlyPerformanceId: state.artistDetails.recentlyPerformanceId,
            recentlyPerformancePlaceId: state.artistDetails.recentlyPerformancePlaceId,
            recentlyPerformanceStart: state.artistDetails.recentlyPerformanceStart,
            recentlyPerformanceTitle: state.artistDetails.recentlyPerformanceTitle,
            recommendWorks: state.artistDetails.recommendWorks,
            selfIntroduction: state.artistDetails.selfIntroduction,
            subscribeCount: state.artistDetails.subscribeCount,
            subscribeState: state.artistDetails.subscribeState,
            topImage: state.artistDetails.topImage,
        }
    }))
    .case(actions.successArtistInfo, (state: IArtistDetailsState, payload): IArtistDetailsState => ({
        ...state,
        artistDetails: {
            artistName: payload.artistName,
            biography: state.artistDetails.biography,
            biographyLoad: state.artistDetails.biographyLoad,
            initLoad: false,
            jobTitle: payload.jobTitle,
            notifyState: payload.notifyState,
            performanceHistory: payload.performanceHistory,
            recentlyPerformanceComments: payload.recentlyPerformanceComments,
            recentlyPerformanceDescription: payload.recentlyPerformanceDescription,
            recentlyPerformanceFinish: payload.recentlyPerformanceFinish,
            recentlyPerformanceId: payload.recentlyPerformanceId,
            recentlyPerformancePlaceId: payload.recentlyPerformancePlaceId,
            recentlyPerformanceStart: payload.recentlyPerformanceStart,
            recentlyPerformanceTitle: payload.ecentlyPerformanceTitle,
            recommendWorks: payload.recommendWorks,
            selfIntroduction: payload.selfIntroduction,
            subscribeCount: payload.subscribeCount,
            subscribeState: payload.subscribeState,
            topImage: payload.topImage,
        }
    }))
    .case(actions.successBiography, (state: IArtistDetailsState): IArtistDetailsState => ({
        ...state,
        artistDetails: {
            artistName: state.artistDetails.artistName,
            biography: state.artistDetails.biography,
            biographyLoad: true,
            initLoad: state.artistDetails.initLoad,
            jobTitle: state.artistDetails.jobTitle,
            notifyState: state.artistDetails.notifyState,
            performanceHistory: state.artistDetails.performanceHistory,
            recentlyPerformanceComments: state.artistDetails.recentlyPerformanceComments,
            recentlyPerformanceDescription: state.artistDetails.recentlyPerformanceDescription,
            recentlyPerformanceFinish: state.artistDetails.recentlyPerformanceFinish,
            recentlyPerformanceId: state.artistDetails.recentlyPerformanceId,
            recentlyPerformancePlaceId: state.artistDetails.recentlyPerformancePlaceId,
            recentlyPerformanceStart: state.artistDetails.recentlyPerformanceStart,
            recentlyPerformanceTitle: state.artistDetails.recentlyPerformanceTitle,
            recommendWorks: state.artistDetails.recommendWorks,
            selfIntroduction: state.artistDetails.selfIntroduction,
            subscribeCount: state.artistDetails.subscribeCount,
            subscribeState: state.artistDetails.subscribeState,
            topImage: state.artistDetails.topImage,
        }
    }))
    .case(actions.successNotify, (state: IArtistDetailsState): IArtistDetailsState => ({
        ...state,
        artistDetails: {
            artistName: state.artistDetails.artistName,
            biography: state.artistDetails.biography,
            biographyLoad: state.artistDetails.biographyLoad,
            initLoad: state.artistDetails.initLoad,
            jobTitle: state.artistDetails.jobTitle,
            notifyState: true,
            performanceHistory: state.artistDetails.performanceHistory,
            recentlyPerformanceComments: state.artistDetails.recentlyPerformanceComments,
            recentlyPerformanceDescription: state.artistDetails.recentlyPerformanceDescription,
            recentlyPerformanceFinish: state.artistDetails.recentlyPerformanceFinish,
            recentlyPerformanceId: state.artistDetails.recentlyPerformanceId,
            recentlyPerformancePlaceId: state.artistDetails.recentlyPerformancePlaceId,
            recentlyPerformanceStart: state.artistDetails.recentlyPerformanceStart,
            recentlyPerformanceTitle: state.artistDetails.recentlyPerformanceTitle,
            recommendWorks: state.artistDetails.recommendWorks,
            selfIntroduction: state.artistDetails.selfIntroduction,
            subscribeCount: state.artistDetails.subscribeCount,
            subscribeState: state.artistDetails.subscribeState,
            topImage: state.artistDetails.topImage,
        }
    }))
    .case(actions.successSubscribe, (state: IArtistDetailsState): IArtistDetailsState => ({
        ...state,
        artistDetails: {
            artistName: state.artistDetails.artistName,
            biography: state.artistDetails.biography,
            biographyLoad: state.artistDetails.biographyLoad,
            initLoad: state.artistDetails.initLoad,
            jobTitle: state.artistDetails.jobTitle,
            notifyState: state.artistDetails.notifyState,
            performanceHistory: state.artistDetails.performanceHistory,
            recentlyPerformanceComments: state.artistDetails.recentlyPerformanceComments,
            recentlyPerformanceDescription: state.artistDetails.recentlyPerformanceDescription,
            recentlyPerformanceFinish: state.artistDetails.recentlyPerformanceFinish,
            recentlyPerformanceId: state.artistDetails.recentlyPerformanceId,
            recentlyPerformancePlaceId: state.artistDetails.recentlyPerformancePlaceId,
            recentlyPerformanceStart: state.artistDetails.recentlyPerformanceStart,
            recentlyPerformanceTitle: state.artistDetails.recentlyPerformanceTitle,
            recommendWorks: state.artistDetails.recommendWorks,
            selfIntroduction: state.artistDetails.selfIntroduction,
            subscribeCount: ++state.artistDetails.subscribeCount,
            subscribeState: true,
            topImage: state.artistDetails.topImage,
        }
    }))
    .case(actions.successUnsubscribe, (state: IArtistDetailsState): IArtistDetailsState => ({
        ...state,
        artistDetails: {
            artistName: state.artistDetails.artistName,
            biography: state.artistDetails.biography,
            biographyLoad: state.artistDetails.biographyLoad,
            initLoad: state.artistDetails.initLoad,
            jobTitle: state.artistDetails.jobTitle,
            notifyState: state.artistDetails.notifyState,
            performanceHistory: state.artistDetails.performanceHistory,
            recentlyPerformanceComments: state.artistDetails.recentlyPerformanceComments,
            recentlyPerformanceDescription: state.artistDetails.recentlyPerformanceDescription,
            recentlyPerformanceFinish: state.artistDetails.recentlyPerformanceFinish,
            recentlyPerformanceId: state.artistDetails.recentlyPerformanceId,
            recentlyPerformancePlaceId: state.artistDetails.recentlyPerformancePlaceId,
            recentlyPerformanceStart: state.artistDetails.recentlyPerformanceStart,
            recentlyPerformanceTitle: state.artistDetails.recentlyPerformanceTitle,
            recommendWorks: state.artistDetails.recommendWorks,
            selfIntroduction: state.artistDetails.selfIntroduction,
            subscribeCount: --state.artistDetails.subscribeCount,
            subscribeState: false,
            topImage: state.artistDetails.topImage,
        }
    }))
    .case(actions.successUnnotify, (state: IArtistDetailsState): IArtistDetailsState => ({
        ...state,
        artistDetails: {
            artistName: state.artistDetails.artistName,
            biography: state.artistDetails.biography,
            biographyLoad: state.artistDetails.biographyLoad,
            initLoad: state.artistDetails.initLoad,
            jobTitle: state.artistDetails.jobTitle,
            notifyState: false,
            performanceHistory: state.artistDetails.performanceHistory,
            recentlyPerformanceComments: state.artistDetails.recentlyPerformanceComments,
            recentlyPerformanceDescription: state.artistDetails.recentlyPerformanceDescription,
            recentlyPerformanceFinish: state.artistDetails.recentlyPerformanceFinish,
            recentlyPerformanceId: state.artistDetails.recentlyPerformanceId,
            recentlyPerformancePlaceId: state.artistDetails.recentlyPerformancePlaceId,
            recentlyPerformanceStart: state.artistDetails.recentlyPerformanceStart,
            recentlyPerformanceTitle: state.artistDetails.recentlyPerformanceTitle,
            recommendWorks: state.artistDetails.recommendWorks,
            selfIntroduction: state.artistDetails.selfIntroduction,
            subscribeCount: state.artistDetails.subscribeCount,
            subscribeState: state.artistDetails.subscribeState,
            topImage: state.artistDetails.topImage,
        }
    }))
    .build()