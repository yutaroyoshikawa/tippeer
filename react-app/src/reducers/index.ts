import { combineReducers } from 'redux';
import artistDetails from './artistDetails'
import back from './back'
import globalMenu from './globalMenu'
import performanceDetails from './performaceDetails'
import placeDetails from './placeDetails'
import searchBox from './searchBox'
// import tipperLogo from './tipperLogo'
import userMenu from './userMenu'
import worksDetails from './worksDetails'




export default combineReducers({
    artistDetails,
    back,
    globalMenu,
    performanceDetails,
    placeDetails,
    searchBox,
    // tipperLogo,
    userMenu,
    worksDetails,
});
