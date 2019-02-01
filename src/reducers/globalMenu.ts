import { reducerWithInitialState } from 'typescript-fsa-reducers'
import  { UAParser } from 'ua-parser-js'
import * as actions from '../actions/globalMenu'

const uaParser = new UAParser()
const getDevice = uaParser.getDevice().type

interface IGlobalMenu {
    agent: string
    isHide: boolean
}

export interface IGlobalMenuState {
    globalMenu: IGlobalMenu
}

const initialReduceUserMenuState: IGlobalMenu = {
    agent: '',
    isHide: false,
}

export default reducerWithInitialState(initialReduceUserMenuState)
    .case(actions.getAgentInfo, (state: IGlobalMenu): IGlobalMenu => ({
        ...state,
        agent: !getDevice ? 'undefined' : getDevice.toString()
    }))
    .case(actions.hideGlobalMenu, (state: IGlobalMenu): IGlobalMenu => ({
        ...state,
        isHide: true,
    }))
    .case(actions.showGlobalMenu, (state: IGlobalMenu): IGlobalMenu => ({
        ...state,
        isHide: false,
    }))
    .build()