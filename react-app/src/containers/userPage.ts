import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import userPage from '../layouts/userPage'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        globalMenu: state.globalMenu.globalMenu,
        userPage: state.userPage.userPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
export const UserPage = connect<{}, {}>(mapStateToProps, mapDispatchToProps)(userPage) as React.ComponentClass