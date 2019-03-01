import { ViewState } from 'react-map-gl';
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/userPage'

export interface IMapPerformance {
    performanceId: string
    latitude: number
    longitude: number
    performanceName: string
    performanceThumbnail: string
    artistId: string
    start: Date
    finish: Date
    placeName: string
}

export interface IUserPage {
    flyTo: number
    recommendperformances: number[]
    transitionType: 'rotate' | 'fly'
    initialMapPerformances: IMapPerformance[]
    viewport: ViewState
    nowPerformance: {
        performanceId: string
        performanceName: string
        performanceThumbnail: string
        artistId: string
        start: Date
        finish: Date
        placeName: string
    }
    isEffectPlaying: boolean
}

export interface IUserPageState {
    userPage: IUserPage
}

const initialReduceUserPageState: IUserPage = {
    flyTo: 0,
    initialMapPerformances: [
        {
            artistId: 'hoge',
            finish: new Date(),
            latitude: 35.71706,
            longitude: 139.517882,
            performanceId: 'hoge',
            performanceName: 'hoge',
            performanceThumbnail: 'hoge',
            placeName: 'hoge',
            start: new Date(),
        },
        {
            artistId: 'huga',
            finish: new Date(),
            latitude: 35.571013,
            longitude: 139.770478,
            performanceId: 'hoge',
            performanceName: 'huga',
            performanceThumbnail: 'hoge',
            placeName: 'hoge',
            start: new Date(),
        },
        {
            artistId: 'piyo',
            finish: new Date(),
            latitude: 35.7007,
            longitude: 139.574491,
            performanceId: 'hoge',
            performanceName: 'piyo',
            performanceThumbnail: 'hoge',
            placeName: 'hoge',
            start: new Date(),
        },
    ],
    isEffectPlaying: false,
    nowPerformance: {
        artistId: '',
        finish: new Date(),
        performanceId: '',
        performanceName: '',
        performanceThumbnail: '',
        placeName: '',
        start: new Date(),
    },
    recommendperformances: [1, 2, 3, 4, 5, 6, 7, 8],
    transitionType: 'rotate',
    viewport: {
        bearing: 0,
        latitude: 35.6588,
        longitude: 139.6972,
        pitch: 50,
        zoom: 16.5
    },
}

export default reducerWithInitialState(initialReduceUserPageState)
    .case(actions.setFly, (state: IUserPage): IUserPage => ({
        ...state,
        viewport: {
            ...state.viewport,
            latitude: state.initialMapPerformances[state.flyTo].latitude,
            longitude: state.initialMapPerformances[state.flyTo].longitude,
        }
    }))
    .case(actions.setRotate, (state: IUserPage): IUserPage => ({
        ...state,
        viewport: {
            ...state.viewport,
            bearing: state.viewport.bearing !== undefined ?
                state.viewport.bearing + 40 > 360 ?
                    state.viewport.bearing - 330
                    :
                    state.viewport.bearing + 40
                :
                undefined
        }
    }))
    .case(actions.setTransitionType, (state: IUserPage, payload): IUserPage => ({
        ...state,
        transitionType: payload.transitionType,
    }))
    .case(actions.setFlyTo, (state: IUserPage): IUserPage => ({
        ...state,
        flyTo:
            state.flyTo === state.initialMapPerformances.length - 1 ?
                0
                :
                state.flyTo + 1
    }))
    .case(actions.setViewPort, (state: IUserPage, payload): IUserPage => ({
        ...state,
        viewport: { ...payload }
    }))
    .case(actions.setPerformanceInfo, (state: IUserPage): IUserPage => ({
        ...state,
        nowPerformance: {
            artistId: state.initialMapPerformances[state.flyTo].artistId,
            finish: state.initialMapPerformances[state.flyTo].finish,
            performanceId: state.initialMapPerformances[state.flyTo].performanceId,
            performanceName: state.initialMapPerformances[state.flyTo].performanceName,
            performanceThumbnail: state.initialMapPerformances[state.flyTo].performanceThumbnail,
            placeName: state.initialMapPerformances[state.flyTo].placeName,
            start: state.initialMapPerformances[state.flyTo].start,
        }
    }))
    .case(actions.playEffect, (state: IUserPage): IUserPage => ({
        ...state,
        isEffectPlaying: true,
    }))
    .case(actions.endEffect, (state: IUserPage): IUserPage => ({
        ...state,
        isEffectPlaying: false,
    }))
    .build()