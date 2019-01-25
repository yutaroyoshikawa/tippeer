import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import globalMenu, { IProps } from '../layouts/globalMenu'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        globalMenu: state.globalMenu,
        mobileMenu: state.mobileMenu,
        search: state.search,
        tipperLogo: state.tipperLogo,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const GlobalMenu = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(globalMenu) as React.ComponentClass