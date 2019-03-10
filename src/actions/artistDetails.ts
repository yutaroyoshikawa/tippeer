import { GeoPoint, Timestamp } from '@firebase/firestore-types'
import actionCreatorFactory from 'typescript-fsa'
import { IBiography } from '../reducers/artistDetails'
import { IPerformanceComments } from '../reducers/worksDetails'

const actionCreator = actionCreatorFactory()

export interface IPerformance {
    finish: Date
    id: string
    name: string
    placeId: string
    placeName: string
    start: Date
    thumbnail: string
}

export interface IInitGetInfo {
    artistName: string
    selfIntroduction: string
    jobTitle: string
    subscribeCount: number
    topImage: string
    biography: IBiography[]
    uid: string
}

interface IUserSettings {
    notifyState: boolean
    subscribeState: boolean
}

interface IRecentPerformance {
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

export interface IArtistDetails {
    artistName: string
    biography: IBiography[]
    follower: string[]
    jobTitle: string
    notifiedUsers: string[]
    selfIntroduction: string
    subscribeCount: number
    topImage: string
    uid: string
}

interface IGetPerformance {
    address: string
    artist_id: string
    comments: IPerformanceComments[]
    discription: string
    finish: Timestamp
    geo_locate: GeoPoint
    id: string
    name: string
    place_id: string
    place_name: string
    postal_code: string
    start: Timestamp
    thumbnail: string
}

export const requestGetArtistInfo =             actionCreator<string>('REQUEST_GET_ARTIST_INFO')
export const findArtistInfo =                   actionCreator('FIND_ARTIST_INFO')
export const notFindArtistInfo =                actionCreator('NOT_FIND_ARTIST_INFO')

export const successLoading =                   actionCreator('SUCCESS_LOADING')

export const requestSetArtistDetails =          actionCreator<IArtistDetails>('REQUEST_SET_ARTIST_DETAILS')
export const setArtistDetails =                 actionCreator<IInitGetInfo>('SET_ARTIST_DETAILS')

export const requestSetUserSettings =           actionCreator<IArtistDetails>('REQUEST_USER_SETTINGS')
export const setUserSettings =                  actionCreator<IUserSettings>('SET_USER_SETTINGS')

export const requestSetPlannedPerformances =    actionCreator<IGetPerformance[]>('REQUEST_PLANNED_PERFORMANCES')
export const setPlannedPerformances =           actionCreator<IPerformance[]>('SET_PLANNED_PERFORMANCES')

export const requestSetPerformanceHistories =   actionCreator<IGetPerformance[]>('REQUEST_SET_PERFORMANCE_HISTORIES')
export const setPerformanceHistories =          actionCreator<IPerformance[]>('SET_PERFORMANCE_HISTORIES')

export const requestSetRecentPerformance =      actionCreator<IGetPerformance[]>('REQUEST_SET_RECENT_PERFORMANCE')
export const findRecentPerformance =            actionCreator<IRecentPerformance>('SET_RECENT_PERFORMANCE')
export const notFindRecentPerformance =         actionCreator('NOT_FIND_RECENT_PERFORMANCE')

export const requestSubscribe =                 actionCreator<{userId: string, artistId: string}>('REQUEST_SUBSCRIBE')
export const successSubscribe =                 actionCreator('SUCCESS_SUBSCRIBE')

export const requestUnsubscribe =               actionCreator<{userId: string, artistId: string}>('REQUEST_UNSUBSCRIBE')
export const successUnsubscribe =               actionCreator('SUCCESS_UNSUBSCRIBE')

export const requestNotify =                    actionCreator('REQUEST_NOTIFY')
export const successNotify =                    actionCreator('SUCCESS_NOTIFY')
export const faildNotify =                      actionCreator('FAILD_NOTIFY')

export const requestUnnotify =                  actionCreator('REQUEST_UNNOTIFY')
export const successUnnotify =                  actionCreator('SUCCESS_UNNOTIFY')
export const faildUnnotify =                    actionCreator('FAILD_UNNOTIFY')

export const getBiography =                     actionCreator<{artistId: string}>('GET_BIOGRAPHY')
export const successBiography =                 actionCreator<IBiography[]>('SUCCESS_BIOGRAPHY')

export const requestFollow =                    actionCreator<string>('REQUEST_FOLLOW')
export const successFollow =                    actionCreator('SUCCESS_FOLLOW')
export const faildFollow =                      actionCreator<any>('FAILD_FOLLOW')

export const requestUnfollow =                  actionCreator<string>('REQUEST_UNFOLLOW')
export const successUnfollow =                  actionCreator('SUCCESS_UNFOLLOW')
export const faildUnfollow =                    actionCreator<any>('FAILD_UNFOLLOW')
