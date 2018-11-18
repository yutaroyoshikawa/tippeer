import { reducerWithInitialState } from 'typescript-fsa-reducers'
import  { UAParser } from 'ua-parser-js'
import * as actions from '../actions/globalMenu'
import { ITipperLogo } from './tipperLogo';

const uaParser = new UAParser()
const getDevice = uaParser.getDevice().type

interface IGlobalMenu {
    agent: string
}

export interface IGlobalMenuState {
    globalMenu: IGlobalMenu[]
    tipperLogo: ITipperLogo[]
}

const initialReduceUserMenuState: IGlobalMenuState = {
    globalMenu: [
        {
            agent: '',
        }
    ],
    tipperLogo: [
        {
            url: '',
        }
    ]
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
    .build()