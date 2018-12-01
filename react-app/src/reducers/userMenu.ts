import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/userMenu'

interface IUserMenu {
    openState: boolean;
}

export interface IUserMenuState {
    userMenu: IUserMenu;
}

const initialReduceUserMenuState: IUserMenuState = {
    userMenu: {
            openState: false,
        }
}

export default reducerWithInitialState(initialReduceUserMenuState)
    .case(actions.openMenu, (state: IUserMenuState) => ({
        ...state,
        userMenu: {openState: true}
    }))
    .case(actions.closeMenu, (state: IUserMenuState) => ({
        ...state,
        userMenu: {openState: false}
    }))
    .build()