import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/tipping'
import { IScreen } from '../layouts/tipping'

export interface IPerformance {
    artistId: string
    name: string
    start: Date
    finish: Date
    id: string
}

interface ITipping {
    scanState: boolean
    isFindPerformance: boolean
    isLoadPerformance: boolean
    isLoadScaner: boolean
    performance: IPerformance
    componentState: IScreen
    isLegacyMode: boolean
    tippingValue: number
    paying: {
        isBack: boolean
        samplingCount: number
        yIndex: number
    }
}

export interface ITippingState {
    tipping: ITipping
}

const initialReduceUserMenuState: ITipping = {
    componentState: 'top',
    isFindPerformance: false,
    isLegacyMode: false,
    isLoadPerformance: false,
    isLoadScaner: false,
    paying: {
        isBack: true,
        samplingCount: 0,
        yIndex: 280,
    },
    performance: {
        artistId: '',
        finish: new Date(),
        id: '',
        name: '',
        start: new Date(),
    },
    scanState: false,
    tippingValue: 0,
}

export default reducerWithInitialState(initialReduceUserMenuState)
    .case(actions.setComponent, (state: ITipping, payload): ITipping => ({
        ...state,
        componentState: payload,
    }))
    .case(actions.successLoadScanner, (state: ITipping): ITipping => ({
        ...state,
        isLoadScaner: true,
    }))
    .case(actions.faildLoadScanner, (state: ITipping): ITipping => ({
        ...state,
        isLegacyMode: true,
    }))
    .case(actions.requestGetTippingPerformance, (state: ITipping, payload): ITipping => ({
        ...state,
        componentState: 'result',
        isLoadPerformance: true,
    }))
    .case(actions.successGetTippingPerformance, (state: ITipping, payload): ITipping => ({
        ...state,
        componentState: 'result',
        isFindPerformance: true,
        isLoadPerformance: false,
        performance: payload,
    }))
    .case(actions.faildGetTippingPerformance, (state: ITipping): ITipping => ({
        ...state,
        isFindPerformance: false,
        isLoadPerformance: false,
    }))
    .case(actions.setTippingValue, (state: ITipping, payload): ITipping => ({
        ...state,
        tippingValue: payload,
    }))
    .case(actions.setIsBack, (state: ITipping, payload): ITipping => ({
        ...state,
        paying: {
            ...state.paying,
            isBack: payload,
            yIndex: 280,
        }
    }))
    .case(actions.setYIndex, (state: ITipping, payload) => ({
        ...state,
        paying: {
            ...state.paying,
            samplingCount: state.paying.samplingCount === 9 ? 0 : ++state.paying.samplingCount,
            yIndex: payload,
        }
    }))
    .case(actions.initializePaying, (state: ITipping): ITipping => ({
        ...state,
        paying: {
            isBack: true,
            samplingCount: 0,
            yIndex: 280,
        },
        tippingValue: 0,
    }))
    .build()