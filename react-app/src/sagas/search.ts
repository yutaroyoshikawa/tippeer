import createHistory from 'history/createBrowserHistory';
import { take } from 'redux-saga/effects'

export function* handleSearch() {
    while(true) {
        const action = yield take('SEARCH')
        yield createHistory().push('/search/' + action.payload.searchWord)
    }
} 