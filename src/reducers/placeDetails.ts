import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/placeDetails'

export interface IPlaceDetails {
    address: string
    performaces: number[]
    placeName: string
    postalcode: string
    latitude: number
    longitude: number
}

export interface IPlaceDetailsState {
    placeDetails: IPlaceDetails
}

const initialReducePlaceDetailsState: IPlaceDetailsState = {
    placeDetails: {
        address: '東京都小金井市関野町１丁目１３−１',
        latitude: 35.71706,
        longitude: 139.517882,
        performaces: [1,2,3,4,5,6,7,8,9,10,11,12],
        placeName: '小金井公園',
        postalcode: '184-0001',
    }
}

export default reducerWithInitialState(initialReducePlaceDetailsState)
    .case(actions.successPlaceInfo, (state: IPlaceDetailsState, payload) => ({
        ...state,
        placeDetails: payload
    }))
    .build()