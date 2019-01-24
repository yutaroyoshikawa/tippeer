import { SagaIterator } from 'redux-saga'
import { all } from 'redux-saga/effects';
import ArtistDetails from './artistDetails'
import Auth from './auth'
import FireStore from './fireStore'
import PerformanceDetails from './performanceDetails'
import RegistUser from './registUser'
import Search from './search'


export default function* (): SagaIterator{
  yield all([
    ...ArtistDetails,
    ...Auth,
    ...FireStore,
    ...PerformanceDetails,
    ...RegistUser,
    ...Search,
  ])
}