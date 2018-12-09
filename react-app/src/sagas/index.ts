import { fork } from 'redux-saga/effects';
import { handleSearch } from './search'

export function* rootSaga(){
  yield fork(handleSearch)
}