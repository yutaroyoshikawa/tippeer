import { combineReducers } from 'redux';
import back from './back'
import searchBox from './searchBox'
import tipperLogo from './tipperLogo'
import userMenu from './userMenu'

export default combineReducers({
    back,
    searchBox,
    tipperLogo,
    userMenu
});
