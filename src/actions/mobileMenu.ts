import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

type tabType = 'library' | 'search' | 'tipping' | 'works' | 'manage' | 'none'

export const setMobileMenuState =   actionCreator<tabType>('SET_MOBILE_MENU_STATE')
export const hideMobileMenu =       actionCreator('HIDE_MOBILE_MENU')
export const showMobileMenu =       actionCreator('SHOW_MOBILE_MENU')