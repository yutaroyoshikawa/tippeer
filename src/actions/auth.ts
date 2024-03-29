import actionCreatorFactory from 'typescript-fsa'
import { userType } from '../reducers/auth'
const actionCreator = actionCreatorFactory()

export interface ICurrentUser {
    displayName: string | null
    email: string | null
    photoURL: string | null
    emailVerified: boolean | null
    uid: string
}

export const successCurrentUserInfo  = actionCreator<ICurrentUser>('SUCCESS_CURRENT_USER_INFO')
export const failureCurrentUserInfo = actionCreator<{errorMsg: string}>('FAILURE_CURRENT_USER_INFO')

export const requestLogout          = actionCreator('REQUEST_LOGOUT')
export const successLogout          = actionCreator('SUCCESS_LOGOUT')
export const failureLogout          = actionCreator('FAILURE_LOGOUT')

export const requestLogin           = actionCreator('REQUEST_LOGIN')
export const successLogin           = actionCreator('SUCCESS_LOGIN')

export const hideAuth               = actionCreator('HIDE_AUTH')
export const showAuth               = actionCreator('SHOW_AUTH')

export const existsUser             = actionCreator('EXISTS_USER')
export const noExistsUser           = actionCreator('NO_EXISTS_USER')

export const registRequestAlert     = actionCreator('REGIST_REQUEST_ALERT')

export const resetAuthState         = actionCreator('RESET_AUTH_STATE')

export const setUserInfo            = actionCreator<{id: string, userType: userType, following: string[]}>('SET_USER_INFO')