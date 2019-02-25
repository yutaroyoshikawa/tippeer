import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/manage'
import * as qrActions from '../actions/manageQR'

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
    tippingSum: number
    tippingHash: string
    comments: IComments[]
    discription: string
}

interface IManageQR {
    isEnabledButton: boolean
    performance: IPerformance
}

export interface IManageQRState {
    manageQR: IManageQR
}

const initialReduceManageState: IManageQR = {
    isEnabledButton: true,
    performance: {
        comments: new Array(),
        discription: '',
        finish: new Date(),
        id: 'hoge',
        name: '',
        start: new Date(),
        thumbnail: '',
        tippingHash: '',
        tippingSum: 0,
    }
}

export default reducerWithInitialState(initialReduceManageState)
    .case(actions.successGetPerformances, (state: IManageQR): IManageQR => ({
        ...state,
    }))
    .case(qrActions.requestGetManageQrPerformance, (state: IManageQR): IManageQR => ({
        ...state,
    }))
    .case(qrActions.successGetManageQrPerformance, (state: IManageQR, payload): IManageQR => ({
        ...state,
        performance: payload,
    }))
    .case(qrActions.faildGetManageQrPerformance, (state: IManageQR): IManageQR => ({
        ...state,
    }))
    .build()
