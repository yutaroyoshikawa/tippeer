import { ViewState } from 'react-map-gl';
import actionCreatorFactory from 'typescript-fsa'
import { IMapPerformance } from '../reducers/userPage'

const actionCreator = actionCreatorFactory()

type TransitionType = 'rotate' | 'fly'

export const requestGetRealPerformance = actionCreator('REQUEST_GET_REAL_PERFORMANCE')
export const successGetRealPerformance = actionCreator<IMapPerformance[]>('SUCCESS_GET_REAL_PERFORMANCE')
export const faildGetRealPerformance = actionCreator<any>('FAILD_GET_REAL_PERFORMANCE')

export const setRotate          = actionCreator('SET_ROTATE')
export const setFly             = actionCreator('SET_FLY')
export const setFlyTo           = actionCreator('SET_FLY_TO')
export const setViewPort        = actionCreator<ViewState>('SET_VIEW_PORT')
export const setTransitionType  = actionCreator<{transitionType: TransitionType}>('SET_TRANSITION_TYPE')
export const setPerformanceInfo = actionCreator('SET_PERFORMANCE_INFO')
export const playEffect      = actionCreator('PLAY_EFFECT')
export const endEffect       = actionCreator('END_EFFECT')

export const requestLoadRecommend = actionCreator('REQUEST_LOAD_RECOMMEND')
export const successLoadRecommend = actionCreator<string[]>('SUCCESS_LOAD_RECOMMEND')
export const faildLoadRecommend = actionCreator<any>('FAILD_LOAD_RECOMMEND')

export const requestLoadNearby = actionCreator('REQUEST_LOAD_NEARBY')
export const successLoadNearby = actionCreator<string[]>('SUCCESS_LOAD_NEARBY')
export const faildLoadNearby = actionCreator<any>('FAILD_LOAD_NEARBY')

export const requestLoadFollower = actionCreator('REQUEST_LOAD_FOLLOWER')
export const successLoadFollower = actionCreator<string[]>('SUCCESS_LOAD_FOLLOWER')
export const faildLoadFollower = actionCreator<any>('FAILD_LOAD_FOLLOWER')

export const openWindow = actionCreator('OPEN_WINDOW')
export const closeWindow = actionCreator('CLOSE_WINDOW')

export const setSelectedWindow = actionCreator<'recommend' | 'nearby' | 'following'>('SET_SELECTED_WINDOW')
