import { SagaIterator } from 'redux-saga'
// import createHistory from 'history/createBrowserHistory';
import { fork, put, take } from 'redux-saga/effects'
import { searchedResult } from '../actions/search'
import * as actions from '../actions/searchBox'

function* handleSearch(): SagaIterator {
    while(true) { 
        yield take(actions.requestSearch)
        yield put(searchedResult)
    }
} 

export default [
    fork(handleSearch),
]