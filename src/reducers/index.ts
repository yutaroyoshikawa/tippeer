import { reducer as notifications } from 'react-notification-system-redux'
import { combineReducers } from 'redux'
import artistDetails from './artistDetails'
import auth from './auth'
import back from './back'
import commentBox from './commentBox'
import cropper from './cropper'
import dialog from './dialog'
import globalMenu from './globalMenu'
import library from './library'
import manage from './manage'
import manageQR from './manageQR'
import mobileMenu from './mobileMenu'
import performanceDetails from './performaceDetails'
import placeDetails from './placeDetails'
import registUser from './registUser'
import search from './search'
import searchBox from './searchBox'
import tipperLogo from './tipperLogo'
import tipping from './tipping'
import userMenu from './userMenu'
import userPage from './userPage'
import worksDetails from './worksDetails'
import worksTop from './worksTop'

export default combineReducers({
    artistDetails,
    auth,
    back,
    commentBox,
    cropper,
    dialog,
    globalMenu,
    library,
    manage,
    manageQR,
    mobileMenu,
    notifications,
    performanceDetails,
    placeDetails,
    registUser,
    search,
    searchBox,
    tipperLogo,
    tipping,
    userMenu,
    userPage,
    worksDetails,
    worksTop,
})
