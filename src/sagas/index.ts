import { SagaIterator } from 'redux-saga'
import { all } from 'redux-saga/effects';
import Auth from './auth'
import FireStore from './fireStore'
import RegistUser from './registUser'
import Search from './search'

export default function* (): SagaIterator{
  yield all([
    ...Auth,
    ...FireStore,
    ...RegistUser,
    ...Search,
  ])
}