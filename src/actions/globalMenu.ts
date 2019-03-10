import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

export const getAgentInfo =         actionCreator('GET_AGENT_INFO')

export const hideGlobalMenu =       actionCreator('HIDE_GLOBAL_MENU')
export const showGlobalMenu =       actionCreator('SHOW_GLOBAL_MENU')

export const requestGetGeoLocation = actionCreator('REQUEST_GET_GEO_LOCATION')
export const successGetGeoLocation = actionCreator<any>('SUCCESS_GET_GEO_LOCATION')
export const faildGetGeoLocation = actionCreator<any>('FAILD_GET_GEO_LOCATION')