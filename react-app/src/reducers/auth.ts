import { __assign } from 'tslib';
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/auth'
import { IAuthState } from '../reducers/auth'

interface IAuth {
    displayName: string | null
    email: string | null
    photoURL: string | null
    emailVerified: boolean | null
    uid: string
    isSignedIn: boolean
    hideAuth: boolean
}

export interface IAuthState{
    auth: IAuth
}

const initialReduceAuthState: IAuth = {
    displayName: null,
    email: null,
    emailVerified: null,
    hideAuth: true,
    isSignedIn: false,
    photoURL: null,
    uid: '',
}

export default reducerWithInitialState(initialReduceAuthState)
    .case(actions.successCurrenUserInfo, (state: IAuth, payload): IAuth => ({
        ...state,
        ...payload,
        isSignedIn: true,
    }))
    .case(actions.failureCurrentUserInfo, (state: IAuth, payload): IAuth => ({
        ...state,
        isSignedIn: false,
    }))
    .case(actions.successLogout, (state: IAuth, payload): IAuth => ({
        ...state,
        isSignedIn: false,
    }))
    .case(actions.showAuth, (state: IAuth): IAuth => ({
        ...state,
        hideAuth: false,
    }))
    .case(actions.hideAuth, (state: IAuth): IAuth => ({
        ...state,
        hideAuth: true,
    }))
    .build()