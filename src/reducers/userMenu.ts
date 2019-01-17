import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/userMenu'

type IconProp = 'faUserCircle' | 'faTimes'

interface IUserMenu {
    openState: boolean;
    mark: IconProp;
    isRegistration: boolean
}

export interface IUserMenuState {
    userMenu: IUserMenu;
}

const initialReduceUserMenuState: IUserMenu = {
    isRegistration: false,
    mark: 'faUserCircle',
    openState: false,
}

export default reducerWithInitialState(initialReduceUserMenuState)
    .case(actions.openMenu, (state: IUserMenu): IUserMenu => ({
        ...state,
        mark: 'faTimes',
        openState: true
    }))
    .case(actions.closeMenu, (state: IUserMenu): IUserMenu => ({
        ...state,
        mark: 'faUserCircle',
        openState: false,
    }))
    .case(actions.openRegistration, (state: IUserMenu): IUserMenu => ({
        ...state,
        isRegistration: true,
    }))
    .case(actions.closeRegistration, (state: IUserMenu): IUserMenu => ({
        ...state,
        isRegistration: false,
    }))
    .build()