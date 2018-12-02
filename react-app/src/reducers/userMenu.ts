import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/userMenu'

type IconProp = 'faUserCircle' | 'faTimes'

interface IUserMenu {
    openState: boolean;
    mark: IconProp;
}

export interface IUserMenuState {
    userMenu: IUserMenu;
}

const initialReduceUserMenuState: IUserMenuState = {
    userMenu: {
            mark: 'faUserCircle',
            openState: false,
        }
}

export default reducerWithInitialState(initialReduceUserMenuState)
    .case(actions.openMenu, (state: IUserMenuState) => ({
        ...state,
        userMenu: {
            mark: 'faTimes',
            openState: true
        }
    }))
    .case(actions.closeMenu, (state: IUserMenuState) => ({
        ...state,
        userMenu: {
            mark: 'faUserCircle',
            openState: false
        }
    }))
    .build()