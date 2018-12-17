import actionCreatorFactory from 'typescript-fsa'
import { IBiography } from '../reducers/artistDetails'
import { IPerformanceComments } from '../reducers/worksDetails'

const actionCreator = actionCreatorFactory()

interface IInitGetInfo {
    artistName: string
    selfIntroduction: string
    jobTitle: string
    notifyState: boolean
    performanceHistory: number[]
    subscribeCount: number
    subscribeState: boolean
    recentlyPerformanceComments: IPerformanceComments[]
    recentlyPerformanceDescription: string
    recentlyPerformanceFinish: string
    recentlyPerformanceId: number
    recentlyPerformancePlaceId: number
    recentlyPerformanceStart: string
    ecentlyPerformanceTitle: string
    recommendWorks: number[]
    topImage: string
}

export const getArtistInfo =            actionCreator<{artistId: string}>('GET_ARTIST_INFO')
export const successArtistInfo =        actionCreator<IInitGetInfo>('SUCCESS_ARTIST_INFO')

export const requestSubscribe =         actionCreator<{userId: string, artistId: string}>('REQUEST_SUBSCRIBE')
export const successSubscribe =         actionCreator('SUCCESS_SUBSCRIBE')

export const requestUnsubscribe =       actionCreator<{userId: string, artistId: string}>('REQUEST_UNSUBSCRIBE')
export const successUnsubscribe =       actionCreator('SUCCESS_UNSUBSCRIBE')

export const requestNotify =            actionCreator<{userId: string, artistId: string}>('REQUEST_NOTIFY')
export const successNotify =            actionCreator('SUCCESS_NOTIFY')

export const requestUnnotify =          actionCreator<{userId: string, artistId: string}>('REQUEST_UNNOTIFY')
export const successUnnotify =          actionCreator('SUCCESS_UNNOTIFY')

export const getBiography =             actionCreator<{artistId: string}>('GET_BIOGRAPHY')
export const successBiography =         actionCreator<IBiography[]>('SUCCESS_BIOGRAPHY')