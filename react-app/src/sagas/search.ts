// import createHistory from 'history/createBrowserHistory';
import { fork, put, take } from 'redux-saga/effects'
import * as Actions from '../actions/globalMenu'

function* handleSearch() {
    while(true) {
        yield take('SEARCH')
        yield put(Actions.getAgentInfo)
    }
} 

export default [
    fork(handleSearch),
]