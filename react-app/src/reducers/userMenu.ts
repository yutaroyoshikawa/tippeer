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

const initialReduceUserMenuState: IUserMenuState = {
    userMenu: {
            isRegistration: false,
            mark: 'faUserCircle',
            openState: false,
        }
}

export default reducerWithInitialState(initialReduceUserMenuState)
    .case(actions.openMenu, (state: IUserMenuState) => ({
        userMenu: {
            ...state.userMenu,
            mark: 'faTimes',
            openState: true
        }
    }))
    .case(actions.closeMenu, (state: IUserMenuState) => ({
        userMenu: {
            ...state.userMenu,
            mark: 'faUserCircle',
            openState: false
        }
    }))
    .case(actions.openRegistration, (state: IUserMenuState) => ({
        userMenu: {
            ...state.userMenu,
            isRegistration: true,
        }
    }))
    .case(actions.closeRegistration, (state: IUserMenuState) => ({
        userMenu: {
            ...state.userMenu,
            isRegistration: false,
        }
    }))
    .build()