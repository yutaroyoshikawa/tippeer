import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/mobileMenu'

export type tabType = 'library' | 'search' | 'tipping' | 'works' | 'manage' | 'none'

interface IMobileMenu {
    tabState: tabType
    isHide: boolean
}

export interface IMobileMenuState {
    mobileMenu: IMobileMenu
}

const initialReduceMobileMenuState: IMobileMenu = {
    isHide: false,
    tabState: 'none',
}

export default reducerWithInitialState(initialReduceMobileMenuState)
    .case(actions.setMobileMenuState, (state: IMobileMenu, payload): IMobileMenu => ({
        ...state,
        tabState: payload,
    }))
    .case(actions.hideMobileMenu, (state: IMobileMenu): IMobileMenu => ({
        ...state,
        isHide: true,
    }))
    .case(actions.showMobileMenu, (state: IMobileMenu): IMobileMenu => ({
        ...state,
        isHide: false,
    }))
    .build()