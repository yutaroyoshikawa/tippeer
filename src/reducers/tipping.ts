import { reducerWithInitialState } from 'typescript-fsa-reducers'

interface ITipping {
    scanState: boolean
    performanceName: string
    performanceStart: string
    performanceFinish: string
    performanceId: number
}

export interface ITippingState {
    tipping: ITipping;
}

const initialReduceUserMenuState: ITippingState = {
    tipping: {
            performanceFinish: '2018/12/10-12:59',
            performanceId: 1,
            performanceName: 'hoge',
            performanceStart: '2018/12/10-13:59',
            scanState: false,
        }
}

export default reducerWithInitialState(initialReduceUserMenuState)
    .build()