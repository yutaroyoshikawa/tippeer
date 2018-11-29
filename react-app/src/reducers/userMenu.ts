import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/userMenu'

interface IUserMenu {
    openState: boolean;
}

export interface IUserMenuState {
    userMenu: IUserMenu[];
}

const initialReduceUserMenuState: IUserMenuState = {
    userMenu: [
        {
            openState: false,
        }
    ]
}

const openMenu = (data: IUserMenu[]): IUserMenu[] => (
    data.map((task) => {
          task.openState = true
        return task;
      })
)

const closeMenu = (data: IUserMenu[]): IUserMenu[] => (
    data.map((menu) => {
          menu.openState = false
        return menu;
      })
)

export default reducerWithInitialState(initialReduceUserMenuState)
    .case(actions.openMenu, (state: IUserMenuState) => ({
        ...state,
        userMenu: openMenu(state.userMenu)
    }))
    .case(actions.closeMenu, (state: IUserMenuState) => ({
        ...state,
        userMenu: closeMenu(state.userMenu)
    }))
    .build()