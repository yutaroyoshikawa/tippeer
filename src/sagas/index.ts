import { SagaIterator } from 'redux-saga'
import { all } from 'redux-saga/effects';
import ArtistDetails from './artistDetails'
import Auth from './auth'
import Cropper from './cropper'
import FireStore from './fireStore'
import ManagePerformance from './managePerformance'
import ManageWorks from './manageWorks'
import PerformanceDetails from './performanceDetails'
import PlaceDetails from './placeDetails'
import RegistUser from './registUser'
// import Search from './search'
import Tipping from './tipping'
import UserMenu from './userMenu'
import UserPage from './userPage'
import WorksDetails from './worksDetails'


export default function* (): SagaIterator{
  yield all([
    ...ArtistDetails,
    ...Auth,
    ...Cropper,
    ...FireStore,
    ...ManagePerformance,
    ...ManageWorks,
    ...PerformanceDetails,
    ...PlaceDetails,
    ...RegistUser,
    // ...Search,
    ...Tipping,
    ...UserMenu,
    ...UserPage,
    ...WorksDetails,
  ])
}