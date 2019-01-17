import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()
type tabType = 'library' | 'search' | 'tipping' | 'works' | 'none'

export const getAgentInfo =         actionCreator('GET_AGENT_INFO')
export const setMobileMenuState =   actionCreator<{tabState: tabType}>('SET_MOBILE_MENU_STATE')