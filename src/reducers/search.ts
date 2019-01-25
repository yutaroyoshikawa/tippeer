import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface ISearch {
    searchWord: string
    isLoad: boolean
    result: {
        artists: string[]
        works: string[]
        performances: string[]
        places: string[]
    }
}

export interface ISearchState {
    search: ISearch
}

const initialReduceSearchState: ISearch = {
    isLoad: false,
    result: {
        artists: [],
        performances: [],
        places: [],
        works: [],
    },
    searchWord: '',
}

export default reducerWithInitialState(initialReduceSearchState)
    .build()
