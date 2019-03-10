import { SagaIterator } from 'redux-saga'
import { all } from 'redux-saga/effects';
import ArtistDetails from './artistDetails'
import Auth from './auth'
import CommentBox from './commentBox'
import Cropper from './cropper'
import FireStore from './fireStore'
import GlobalMenu from './globalMenu'
import ManageArtist from './manageArtist'
import ManagePerformance from './managePerformance'
import ManageQR from './manageQR'
import ManageWorks from './manageWorks'
import PerformanceDetails from './performanceDetails'
import PlaceDetails from './placeDetails'
import RegistUser from './registUser'
// import Search from './search'
import Tipping from './tipping'
import TippingQR from './tippingQR'
import UserMenu from './userMenu'
import UserPage from './userPage'
import WorksDetails from './worksDetails'
import WorksTop from './worksTop'

export default function* (): SagaIterator{
  yield all([
    ...ArtistDetails,
    ...Auth,
    ...CommentBox,
    ...Cropper,
    ...FireStore,
    ...GlobalMenu,
    ...ManageArtist,
    ...ManagePerformance,
    ...ManageQR,
    ...ManageWorks,
    ...PerformanceDetails,
    ...PlaceDetails,
    ...RegistUser,
    // ...Search,
    ...Tipping,
    ...TippingQR,
    ...UserMenu,
    ...UserPage,
    ...WorksDetails,
    ...WorksTop,
  ])
}