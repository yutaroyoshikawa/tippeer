import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()
import { IPerformanceDetails  } from '../reducers/performaceDetails'

export const getPerformanceInfo =           actionCreator<{performanceId: 'number'}>('GET_PERFORMANCE_INFO')
export const successPerformanceInfo =       actionCreator<IPerformanceDetails>('SUCCESS_PERFORMANCE_INFO')