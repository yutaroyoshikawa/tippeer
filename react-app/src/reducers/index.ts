import { combineReducers } from 'redux';
import back from './back'
import globalMenu from './globalMenu'
import placeDetails from './placeDetails'
import searchBox from './searchBox'
// import tipperLogo from './tipperLogo'
import userMenu from './userMenu'
import worksDetails from './worksDetails'


export default combineReducers({
    back,
    globalMenu,
    placeDetails,
    searchBox,
    // tipperLogo,
    userMenu,
    worksDetails,
});
