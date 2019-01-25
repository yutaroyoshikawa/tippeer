import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

type tabType = 'library' | 'search' | 'tipping' | 'works' | 'none'

export const setMobileMenuState =   actionCreator<tabType>('SET_MOBILE_MENU_STATE')