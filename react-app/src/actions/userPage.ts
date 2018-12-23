import { ViewState } from 'react-map-gl';
import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

type TransitionType = 'rotate' | 'fly'

export const setRotate          = actionCreator('SET_ROTATE')
export const setFly             = actionCreator('SET_FLY')
export const setFlyTo           = actionCreator('SET_FLY_TO')
export const setViewPort        = actionCreator<ViewState>('SET_VIEW_PORT')
export const setTransitionType  = actionCreator<{transitionType: TransitionType}>('SET_TRANSITION_TYPE')
export const setPerformanceInfo = actionCreator('SET_PERFORMANCE_INFO')