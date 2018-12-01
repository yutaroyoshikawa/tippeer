import { reducerWithInitialState } from 'typescript-fsa-reducers'

interface ISearchBox {
    searchWord: string
}

export interface ISearchBoxState {
    searchBox: ISearchBox
}

const initialReduceUserMenuState: ISearchBoxState = {
    searchBox: {
            searchWord: '',
        }
}

export default reducerWithInitialState(initialReduceUserMenuState)
    .build()