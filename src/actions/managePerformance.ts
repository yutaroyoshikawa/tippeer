import actionCreatorFactory from 'typescript-fsa'
import { IPlace } from '../reducers/managePerformance'

const actionCreator = actionCreatorFactory()

export interface IPerformance {
    id: string
    name: string
    start: Date
    finish: Date
    discription: string
    thumbnail: string
    place: {
        id: string
        name: string
        postalCode: string
        geoLocate: string
    }
}

export const openRegistDialog =                 actionCreator('OPEN_REGIST_DIALOG')
export const closeRegistDialog =                actionCreator('CLOSE_REGIST_DIALOG')

export const setRegistPerformanceThumb =        actionCreator<string>('SET_REGIST_PERFORMANCE_THUMB')
export const setRegistPerformanceTitle =        actionCreator<string>('SET_REGIST_PERFORMANCE_TITLE')
export const setRegistPerformanceStart =        actionCreator<Date>('SET_REGIST_PERFORMANCE_START')
export const setRegistPerformanceFinish =       actionCreator<Date>('SET_REGIST_PERFORMANCE_FINISH')
export const setRegistDescription =             actionCreator<string>('SET_REGIST_DESCRIPTION')
export const setPerformancePlace =              actionCreator<string>('SET_PERFORMANCE_PLACE')

export const requestRegistPerformance =         actionCreator('REQUEST_REGIST_PERFORMANCE')
export const successRegistPerformance =         actionCreator<IPerformance>('SUCCESS_REGIST_PERFORMANCE')
export const faildRegistPerformance =           actionCreator<string>('FAILD_REGIST_PERFORMANCE')

export const requestGetRegistedPerformances =   actionCreator('REQUEST_GET_REGISTED_PERFORMANCES')
export const successGetRegistedPerformances =   actionCreator<IPerformance[]>('SUCCESS_GET_REGISTED_PERFORMANCES')
export const faildGetRegistedPerformances =     actionCreator('FAILD_GET_REGISTED_PERFORMANCES')

export const requestGetPlaces =                 actionCreator('REQUEST_GET_PLACES')
export const successGetPlaces =                 actionCreator<IPlace[]>('SUCCESS_GET_PLACES')
export const faildGetPlaces =                   actionCreator<any>('FAILD_GET_PLACES')