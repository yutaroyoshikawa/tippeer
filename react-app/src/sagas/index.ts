import { SagaIterator } from 'redux-saga'
import { all } from 'redux-saga/effects';
import Auth from './auth'
import Search from './search'

export default function* (): SagaIterator{
  yield all([
    ...Auth,
    ...Search,
  ])
}