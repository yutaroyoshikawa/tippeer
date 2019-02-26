import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()
import { IComments } from '../reducers/performaceDetails'

interface IPerformanceDetails {
    address: string
    performanceTitle: string
    start: Date
    finish: Date
    discription: string
    artistId: string
    thumbnail: string
    comments: IComments[]
    locateName: string
    geoLocate: number[]
}

export const getPerformanceInfo =           actionCreator<string>('GET_PERFORMANCE_INFO')
export const successPerformanceInfo =       actionCreator<IPerformanceDetails>('SUCCESS_PERFORMANCE_INFO')
export const faildPerformanceInfo   =       actionCreator('FAILD_PERFORMANCE_INFO')

export const addNewComment =                actionCreator<IComments[]>('ADD_NEW_COMMENT')