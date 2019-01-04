import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

export interface ICurrentUser {
    displayName: string | null
    email: string | null
    photoURL: string | null
    emailVerified: boolean | null
    uid: string
}

export const successCurrenUserInfo = actionCreator<ICurrentUser>('SUCCESS_CURRENT_USER_INFO')
export const failureCurrentUserInfo = actionCreator<{errorMsg: string}>('FAILURE_CURRENT_USER_INFO')

export const requestLogout = actionCreator('REQUEST_LOGOUT')
export const successLogout = actionCreator('SUCCESS_LOGOUT')
export const failureLogout = actionCreator('FAILURE_LOGOUT')

export const hideAuth = actionCreator('HIDE_AUTH')
export const showAuth = actionCreator('SHOW_AUTH')