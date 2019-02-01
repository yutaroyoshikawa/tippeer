import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import mobileMenu, { IProps } from '../components/mobileMenu'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        auth: state.auth,
        globalMenu: state.globalMenu,
        mobileMenu: state.mobileMenu,
        tipperLogo: state.tipperLogo,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const MobileMenu = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(mobileMenu) as React.ComponentClass