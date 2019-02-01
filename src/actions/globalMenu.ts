import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

export const getAgentInfo =         actionCreator('GET_AGENT_INFO')

export const hideGlobalMenu =       actionCreator('HIDE_GLOBAL_MENU')
export const showGlobalMenu =       actionCreator('SHOW_GLOBAL_MENU')