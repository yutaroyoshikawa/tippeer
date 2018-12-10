import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()
import { IPlaceDetails } from '../reducers/placeDetails'

export const getPlaceInfo =    actionCreator<{placeId: number}>('GET_PLACE_INFO')
export const successPlaceInfo = actionCreator<IPlaceDetails>('SUCCESS_PLACE_INFO')