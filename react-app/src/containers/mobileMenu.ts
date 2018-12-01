import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import mobileMenu, { IProps } from '../components/mobileMenu'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        globalMenu: state.globalMenu.globalMenu,
        mobileMenu: state.globalMenu.mobileMenu,
        tipperLogo: state.globalMenu.tipperLogo
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const MobileMenu = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(mobileMenu) as React.ComponentClass