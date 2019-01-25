// import * as history from 'history';
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from '../actions/searchBox'


interface ISearchBox {
    searchWord: string
}

export interface ISearchBoxState {
    searchBox: ISearchBox
}

const initialReduceUserMenuState: ISearchBox = {
    searchWord: decodeURI(location.pathname.substr(8, location.pathname.length - 1)),
}

export default reducerWithInitialState(initialReduceUserMenuState)
    .case(actions.setSearchBoxWord, (state: ISearchBox, payload):ISearchBox => ({
        ...state,
        searchWord: payload
    }))
    .build()