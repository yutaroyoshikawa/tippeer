import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import globalMenu, { IProps } from '../layouts/globalMenu'
import { buildStore } from '../store'

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

export const GlobalMenu = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(globalMenu) as React.ComponentClass