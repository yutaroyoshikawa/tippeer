import { combineReducers } from 'redux';
import back from './back'
import globalMenu from './globalMenu'
import searchBox from './searchBox'
// import tipperLogo from './tipperLogo'
import userMenu from './userMenu'

export default combineReducers({
    back,
    globalMenu,
    searchBox,
    // tipperLogo,
    userMenu
});
