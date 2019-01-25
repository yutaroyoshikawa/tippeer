import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/mobileMenu'

export type tabType = 'library' | 'search' | 'tipping' | 'works' | 'none'

interface IMobileMenu {
    tabState: tabType
}

export interface IMobileMenuState {
    mobileMenu: IMobileMenu
}

const initialReduceMobileMenuState: IMobileMenu = {
    tabState: 'none'
}

export default reducerWithInitialState(initialReduceMobileMenuState)
    .case(actions.setMobileMenuState, (state: IMobileMenu, payload): IMobileMenu => ({
        ...state,
        tabState: payload,
    }))
    .build()