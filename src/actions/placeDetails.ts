import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

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
}

export const requestFindPlaceInfo =     actionCreator<string>('REQUEST_FIND_PLACE_INFO')
export const findPlaceInfo =            actionCreator<IPlaceDetails>('FIND_PLACE_INFO')
export const notFindPlaceInfo =         actionCreator('NOT_FIND_PLACE_INFO')