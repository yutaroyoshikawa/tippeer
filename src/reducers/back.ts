import { reducerWithInitialState } from 'typescript-fsa-reducers'

interface IBack {
    hide: boolean
}

export interface IBackState {
    back: IBack[]
}

const initialReduceUserMenuState: IBackState = {
    back: [
        {
            hide: true,
        }
    ]
}

export default reducerWithInitialState(initialReduceUserMenuState)
    .build()