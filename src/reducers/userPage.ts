import { ViewState } from 'react-map-gl';
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/userPage'


interface IMapPerformance {
    performanceId: number
    latitude: number
    longitude: number
    performanceName: string
    performanceThumbnail: string
    artistId: string
    start: string
    finish: string
    placeName: string
}

export interface IUserPage {
    flyTo: number
    recommendperformances: number[]
    transitionType: 'rotate' | 'fly'
    initialMapPerformances: IMapPerformance[]
    viewport: ViewState
    nowPerformance: {
        performanceId: number
        performanceName: string
        performanceThumbnail: string
        artistId: string
        start: string
        finish: string
        placeName: string
    }
}

export interface IUserPageState {
    userPage: IUserPage
}

const initialReduceUserPageState: IUserPageState = {
    userPage: {
        flyTo: 0,
        initialMapPerformances: [
            {
                artistId: 'hoge',
                finish: '2018/12/10-13:59',
                latitude: 35.71706,
                longitude: 139.517882,
                performanceId: 1,
                performanceName: 'hoge',
                performanceThumbnail: 'hoge',
                placeName: 'hoge',
                start: '2018/12/10-12:59',
            },
            {
                artistId: 'huga',
                finish: '2018/12/10-13:59',
                latitude: 35.571013,
                longitude: 139.770478,
                performanceId: 1,
                performanceName: 'huga',
                performanceThumbnail: 'hoge',
                placeName: 'hoge',
                start: '2018/12/10-12:59',
            },
            {
                artistId: 'piyo',
                finish: '2018/12/10-13:59',
                latitude: 35.7007,
                longitude: 139.574491,
                performanceId: 1,
                performanceName: 'piyo',
                performanceThumbnail: 'hoge',
                placeName: 'hoge',
                start: '2018/12/10-12:59',
            },
        ],
        nowPerformance: {
            artistId: '',
            finish: '',
            performanceId: 0,
            performanceName: '',
            performanceThumbnail: '',
            placeName: '',
            start: '',
        },
        recommendperformances: [1,2,3,4,5,6,7,8],
        transitionType: 'rotate',
        viewport: {
            bearing: 0,
            latitude: 35.6588,
            longitude: 139.6972,
            pitch: 50,
            zoom: 16.5
        },
    }
}

export default reducerWithInitialState(initialReduceUserPageState)
    .case(actions.setFly, (state: IUserPageState): IUserPageState => ({
        userPage: {
            ...state.userPage,
            viewport: {
                ...state.userPage.viewport,
                latitude: state.userPage.initialMapPerformances[state.userPage.flyTo].latitude,
                longitude: state.userPage.initialMapPerformances[state.userPage.flyTo].longitude,
            }
        }
    }))
    .case(actions.setRotate, (state: IUserPageState): IUserPageState => ({
        userPage: {
            ...state.userPage,
            viewport: {
                ...state.userPage.viewport,
                bearing: state.userPage.viewport.bearing !== undefined ?
                    state.userPage.viewport.bearing + 40 > 360 ?
                             state.userPage.viewport.bearing - 330
                             :
                             state.userPage.viewport.bearing + 40
                            :
                            undefined
            }
        }
    }))
    .case(actions.setTransitionType, (state: IUserPageState, payload): IUserPageState => ({
        userPage: {
            ...state.userPage,
            transitionType: payload.transitionType,
        }
    }))
    .case(actions.setFlyTo, (state: IUserPageState): IUserPageState => ({
        userPage: {
            ...state.userPage,
            flyTo: 
                state.userPage.flyTo === state.userPage.initialMapPerformances.length - 1 ?
                0
                :
                state.userPage.flyTo + 1
        }
    }))
    .case(actions.setViewPort, (state: IUserPageState, payload): IUserPageState => ({
        userPage: {
            ...state.userPage,
            viewport: {...payload}
        }
    }))
    .case(actions.setPerformanceInfo, (state: IUserPageState): IUserPageState => ({
        userPage: {
            ...state.userPage,
            nowPerformance: {
                artistId: state.userPage.initialMapPerformances[state.userPage.flyTo].artistId,
                finish: state.userPage.initialMapPerformances[state.userPage.flyTo].finish,
                performanceId: state.userPage.initialMapPerformances[state.userPage.flyTo].performanceId,
                performanceName: state.userPage.initialMapPerformances[state.userPage.flyTo].performanceName,
                performanceThumbnail: state.userPage.initialMapPerformances[state.userPage.flyTo].performanceThumbnail,
                placeName: state.userPage.initialMapPerformances[state.userPage.flyTo].placeName,
                start: state.userPage.initialMapPerformances[state.userPage.flyTo].start,
            }
        }
    }))
    .build()