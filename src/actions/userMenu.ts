import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

export const requestOpenMenu    = actionCreator('REQUEST_OPEN_MENU')
export const openMenu           = actionCreator('OPEN_MENU')
export const closeMenu          = actionCreator('CLOSE_MENU')

export const requestUserIcon    = actionCreator('REQUEST_USER_ICON')
export const succsessUserIcon   = actionCreator.call

export const openRegistration   = actionCreator('OPEN_REGISTRATION')
export const closeRegistration  = actionCreator('CLOSE_REGISTRATION')