import { combineReducers } from 'redux';
import artistDetails from './artistDetails'
import back from './back'
import globalMenu from './globalMenu'
import performanceDetails from './performaceDetails'
import placeDetails from './placeDetails'
import searchBox from './searchBox'
import tipping from './tipping'
// import tipperLogo from './tipperLogo'
import userMenu from './userMenu'
import userPage from './userPage';
import worksDetails from './worksDetails'
import worksTop from './worksTop'

export default combineReducers({
    artistDetails,
    back,
    globalMenu,
    performanceDetails,
    placeDetails,
    searchBox,
    tipping,
    // tipperLogo,
    userMenu,
    userPage,
    worksDetails,
    worksTop,
});
