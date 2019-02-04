import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/manage'

export  interface IComments {
    content: string
    userId: string
    icon: string
    postedAt: Date
}

export  interface IPerformance {
    id: string
    name: string
    start: Date
    finish: Date
    thumbnail: string
    artistId: string
    tippingSum: number
    comments: IComments[]
}

interface IManageQR {
    isEnabledButton: boolean
    performance: null | IPerformance
}

export interface IManageQRState {
    manageQR: IManageQR
}

const initialReduceManageState: IManageQR = {
    isEnabledButton: false,
    performance: null
}

export default reducerWithInitialState(initialReduceManageState)
    .case(actions.successGetPerformances, (state: IManageQR): IManageQR => ({
        ...state,
    }))
    .build()