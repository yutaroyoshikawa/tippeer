import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/artistDetails'

interface IBiography {
    date: string
    content: string
}

interface IArtistDetails {
    artistName: string
    selfIntroduction: string
    jobTitle: string
    performanceHistory: number[]
    subscribeCount: number
    biography: IBiography[]
    initLoad: boolean
    biographyLoad: boolean
    recentlyPerformanceId: number
    recommendWorks: number[]
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
            performanceHistory: [1, 2, 3, 4, 5],
            recentlyPerformanceId: 1,
            recommendWorks: [1, 2, 3, 4, 5],
            selfIntroduction: 'hogehugapiyofoo',
            subscribeCount: 100,
        }
}

export default reducerWithInitialState(initialReduceArtistDetailsState)
    .case(actions.getArtistInfo, (state: IArtistDetailsState) => ({
        ...state,
        artistDetails: {
            artistName: state.artistDetails.artistName,
            biography: state.artistDetails.biography,
            biographyLoad: state.artistDetails.biographyLoad,
            initLoad: true,
            jobTitle: state.artistDetails.jobTitle,
            performanceHistory: state.artistDetails.performanceHistory,
            recentlyPerformanceId: state.artistDetails.recentlyPerformanceId,
            recommendWorks: state.artistDetails.recommendWorks,
            selfIntroduction: state.artistDetails.selfIntroduction,
            subscribeCount: state.artistDetails.subscribeCount,
        }
    }))
    .case(actions.successArtistInfo, (state: IArtistDetailsState, payload) => ({
        ...state,
        artistDetails: {
            artistName: payload.artistName,
            biography: state.artistDetails.biography,
            biographyLoad: state.artistDetails.biographyLoad,
            initLoad: false,
            jobTitle: payload.jobTitle,
            performanceHistory: payload.performanceHistory,
            recentlyPerformanceId: payload.recentlyPerformanceId,
            recommendWorks: payload.recommendWorks,
            selfIntroduction: payload.selfIntroduction,
            subscribeCount: payload.subscribeCount,
        }
    }))
    .build()