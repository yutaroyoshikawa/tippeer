import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/placeDetails'

interface IPerformance {
    finish: Date
    id: string
    name: string
    placeId: string
    placeName: string
    start: Date
    thumbnail: string
}

interface IPlaceDetails {
    address: string
    performaces: IPerformance[]
    placeName: string
    postalcode: string
    geoPlace: {
        latitude: number,
        longitude: number,
    },
    isFind: boolean
    isLoad: boolean
}

export interface IPlaceDetailsState {
    placeDetails: IPlaceDetails
}

const initialReducePlaceDetailsState: IPlaceDetails = {
    address: '東京都小金井市関野町１丁目１３−１',
    geoPlace: {
        latitude: 0,
        longitude: 0,
    },
    isFind: false,
    isLoad: false,
    performaces: [],
    placeName: '小金井公園',
    postalcode: '184-0001',
}

export default reducerWithInitialState(initialReducePlaceDetailsState)
    .case(actions.requestFindPlaceInfo, (state: IPlaceDetails): IPlaceDetails => ({
        ...state,
        isLoad: true,
    }))
    .case(actions.findPlaceInfo, (state: IPlaceDetails, payload): IPlaceDetails => ({
        ...state,
        ...payload,
    }))
    .case(actions.notFindPlaceInfo, (state: IPlaceDetails): IPlaceDetails => ({
        ...state,
        isFind: false,
        isLoad: false,
    }))
    .build()