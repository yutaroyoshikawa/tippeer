import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/auth'
import { IAuthState } from '../reducers/auth'

export type userType = 'user' | 'artist' | 'admin'

interface IAuth {
    displayName: string | null
    email: string | null
    photoURL: string | null
    emailVerified: boolean | null
    uid: string
    userType: userType
    isSignedIn: boolean
    hideAuth: boolean
    authState: 'login' | 'regist' | null
}

export interface IAuthState{
    auth: IAuth
}

const initialReduceAuthState: IAuth = {
    authState: null,
    displayName: null,
    email: null,
    emailVerified: null,
    hideAuth: true,
    isSignedIn: false,
    photoURL: null,
    uid: '',
    userType: 'user'
}

export default reducerWithInitialState(initialReduceAuthState)
    .case(actions.successCurrentUserInfo, (state: IAuth, payload): IAuth => ({
        ...state,
        ...payload,
    }))
    .case(actions.failureCurrentUserInfo, (state: IAuth): IAuth => ({
        ...state,
        isSignedIn: false,
    }))
    .case(actions.successLogout, (state: IAuth): IAuth => ({
        ...state,
        authState: null,
        displayName: null,
        email: null,
        emailVerified: null,
        isSignedIn: false,
        photoURL: null,
        uid: '',
    }))
    .case(actions.showAuth, (state: IAuth): IAuth => ({
        ...state,
        hideAuth: false,
    }))
    .case(actions.hideAuth, (state: IAuth): IAuth => ({
        ...state,
        hideAuth: true,
    }))
    .case(actions.existsUser, (state: IAuth): IAuth => ({
        ...state,
        isSignedIn: true,
    }))
    .case(actions.resetAuthState, (state: IAuth): IAuth => ({
        ...state,
        authState: null,
    }))
    .case(actions.setUserInfo, (state: IAuth, payload): IAuth => ({
        ...state,
        ...payload,
    }))
    .build()