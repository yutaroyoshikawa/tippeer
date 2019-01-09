import {reducer as notifications} from 'react-notification-system-redux';
import { combineReducers } from 'redux';
import artistDetails from './artistDetails'
import auth from './auth'
import back from './back'
import dialog from './dialog'
import globalMenu from './globalMenu'
import performanceDetails from './performaceDetails'
import placeDetails from './placeDetails'
import registUser from './registUser'
import searchBox from './searchBox'
import tipping from './tipping'
// import tipperLogo from './tipperLogo'
import userMenu from './userMenu'
import userPage from './userPage';
import worksDetails from './worksDetails'
import worksTop from './worksTop'


export default combineReducers({
    artistDetails,
    auth,
    back,
    dialog,
    globalMenu,
    notifications,
    performanceDetails,
    placeDetails,
    registUser,
    searchBox,
    tipping,
    // tipperLogo,
    userMenu,
    userPage,
    worksDetails,
    worksTop,
});
