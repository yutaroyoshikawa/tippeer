import { reducerWithInitialState } from 'typescript-fsa-reducers'
import  { UAParser } from 'ua-parser-js'
import * as actions from '../actions/globalMenu'
import { ITipperLogo } from './tipperLogo';

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
    globalMenu: IGlobalMenu[]
    tipperLogo: ITipperLogo[]
    mobileMenu: IMobileMenu
}

const initialReduceUserMenuState: IGlobalMenuState = {
    globalMenu: [
        {
            agent: '',
        }
    ],
    mobileMenu: {tabState: 'none'},
    tipperLogo: [
        {
            url: '',
        }
    ],
    
}

const getAgentInfo = (data: IGlobalMenu[]):IGlobalMenu[] => (
    data.map((task) => {
        !getDevice ?
            task.agent = 'undefined'
        :
            task.agent = getDevice.toString()
        
      return task
    })
)

export default reducerWithInitialState(initialReduceUserMenuState)
    .case(actions.getAgentInfo, (state: IGlobalMenuState) => ({
        ...state,
        globalMenu: getAgentInfo(state.globalMenu)
    }))
    .case(actions.setMobileMenuState, (state: IGlobalMenuState, payload) => ({
        ...state,
        mobileMenu: payload
    }))
    .build()