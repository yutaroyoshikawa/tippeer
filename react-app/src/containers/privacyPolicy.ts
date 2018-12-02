import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import privacyPolicy from '../layouts/privacyPolicy'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        globalMenu: state.globalMenu.globalMenu
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const PrivacyPolicy = connect<{}, {}>(mapStateToProps, mapDispatchToProps)(privacyPolicy)