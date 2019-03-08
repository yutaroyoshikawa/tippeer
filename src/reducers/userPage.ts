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
    recommendPerformances: string[]
    nearbyPerformances: string[]
    followingArtist: string[]
    isHideWindow: boolean
    isLoadWindow: boolean
    selectedWindow: 'recommend' | 'nearby' | 'following'
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
    isLoad: boolean
}

export interface IUserPageState {
    userPage: IUserPage
}

const initialReduceUserPageState: IUserPage = {
    flyTo: 0,
    followingArtist: new Array(),
    initialMapPerformances: new Array(),
    isEffectPlaying: false,
    isHideWindow: true,
    isLoad: false,
    isLoadWindow: false,
    nearbyPerformances: new Array(),
    nowPerformance: {
        artistId: '',
        finish: new Date(),
        performanceId: '',
        performanceName: '',
        performanceThumbnail: '',
        placeName: '',
        start: new Date(),
    },
    recommendPerformances: [],
    selectedWindow: 'recommend',
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
            ...state.initialMapPerformances[state.flyTo],
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
    .case(actions.requestGetRealPerformance, (state: IUserPage): IUserPage => ({
        ...state,
        isLoad: true,
    }))
    .case(actions.successGetRealPerformance, (state: IUserPage, payload): IUserPage => ({
        ...state,
        initialMapPerformances: payload,
        isLoad: false,
        viewport: {
            ...state.viewport,
            latitude: payload[0].latitude,
            longitude: payload[0].longitude,
        }
    }))
    .case(actions.faildGetRealPerformance, (state: IUserPage): IUserPage => ({
        ...state,
        isLoad: false,
    }))
    .case(actions.successLoadFollower, (state: IUserPage, payload): IUserPage => ({
        ...state,
        followingArtist: payload,
        isLoadWindow: false,
    }))
    .case(actions.successLoadNearby, (state: IUserPage, payload): IUserPage => ({
        ...state,
        isLoadWindow: false,
        nearbyPerformances: payload,
    }))
    .case(actions.successLoadRecommend, (state: IUserPage, payload): IUserPage => ({
        ...state,
        isLoadWindow: false,
        recommendPerformances: payload,
    }))
    .case(actions.openWindow, (state: IUserPage): IUserPage => ({
        ...state,
        isHideWindow: false,
        isLoadWindow: true,
    }))
    .case(actions.closeWindow, (state: IUserPage): IUserPage => ({
        ...state,
        isHideWindow: true,
        isLoadWindow: false,
    }))
    .case(actions.faildLoadFollower, (state: IUserPage): IUserPage => ({
        ...state,
        isLoadWindow: false,
    }))
    .case(actions.faildLoadNearby, (state: IUserPage): IUserPage => ({
        ...state,
        isLoadWindow: false,
    }))
    .case(actions.faildLoadRecommend, (state: IUserPage): IUserPage => ({
        ...state,
        isLoadWindow: false,
    }))
    .case(actions.setSelectedWindow, (state: IUserPage, payload): IUserPage => ({
        ...state,
        selectedWindow: payload,
    }))
    .build()