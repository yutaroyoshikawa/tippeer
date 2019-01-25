import { reducerWithInitialState } from 'typescript-fsa-reducers'
import  { UAParser } from 'ua-parser-js'
import * as actions from '../actions/globalMenu'

const uaParser = new UAParser()
const getDevice = uaParser.getDevice().type

interface IGlobalMenu {
    agent: string
}

export interface IGlobalMenuState {
    globalMenu: IGlobalMenu
}

const initialReduceUserMenuState: IGlobalMenu = {
    agent: '',
}

export default reducerWithInitialState(initialReduceUserMenuState)
    .case(actions.getAgentInfo, (state: IGlobalMenu): IGlobalMenu => ({
        ...state,
        agent: !getDevice ? 'undefined' : getDevice.toString()
    }))
    .build()