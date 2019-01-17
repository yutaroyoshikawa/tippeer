import { reducerWithInitialState } from 'typescript-fsa-reducers'
import  { UAParser } from 'ua-parser-js'
import * as actions from '../actions/globalMenu'
// import * as searchActions from '../actions/search'
import { ITipperLogo } from './tipperLogo';

import { ISearch } from './search'

const uaParser = new UAParser()
const getDevice = uaParser.getDevice().type

export type tabType = 'library' | 'search' | 'tipping' | 'works' | 'none'

interface IGlobalMenu {
    agent: string
}

interface IMobileMenu {
    tabState: tabType
}

export interface IGlobalMenuState {
    globalMenu: IGlobalMenu
    tipperLogo: ITipperLogo
    mobileMenu: IMobileMenu
    search: ISearch
}

const initialReduceUserMenuState: IGlobalMenuState = {
    globalMenu: {agent: ''},
    mobileMenu: {tabState: 'none'},
    search: {
        result: {
            artists: null,
            performances: null,
            places: null,
            works: null,
        },
        searchState: 'none',
        searchWord: '',
    },
    tipperLogo: {url: ''},
}

export default reducerWithInitialState(initialReduceUserMenuState)
    .case(actions.getAgentInfo, (state: IGlobalMenuState) => ({
        ...state,
        globalMenu: {agent: !getDevice ? 'undefined' : getDevice.toString()}
    }))
    .case(actions.setMobileMenuState, (state: IGlobalMenuState, payload) => ({
        ...state,
        mobileMenu: payload
    }))
    // .case(searchActions.searchAsyncActions.request, (state: IGlobalMenuState) => ({
    //     ...state,
    //     search: {
    //         result: state.search.result,
    //         searchState: 'loading',
    //         searchWord: state.search.searchWord,
    //     }
    // }))
    // .case(searchActions.searchAsyncActions.done, (state: IGlobalMenuState) => ({
    //     ...state,
    //     search: {
    //         result: state.search.result,
    //         searchState: 'complete',
    //         searchWord: state.search.searchWord,
    //     }
    // }))
    .build()