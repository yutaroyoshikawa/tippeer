import { SagaIterator } from 'redux-saga'
import { all } from 'redux-saga/effects';
import ArtistDetails from './artistDetails'
import Auth from './auth'
import FireStore from './fireStore'
import PerformanceDetails from './performanceDetails'
import PlaceDetails from './placeDetails'
import RegistUser from './registUser'
// import Search from './search'
import Tipping from './tipping'
import WorksDetails from './worksDetails'


export default function* (): SagaIterator{
  yield all([
    ...ArtistDetails,
    ...Auth,
    ...FireStore,
    ...PerformanceDetails,
    ...PlaceDetails,
    ...RegistUser,
    // ...Search,
    ...Tipping,
    ...WorksDetails,
  ])
}