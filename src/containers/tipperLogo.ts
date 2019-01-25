import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import tipperLogo, { IProps } from '../components/tipperLogo'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        globalMenu: state.globalMenu,
        mobileMenu: state.mobileMenu,
        tipperLogo: state.tipperLogo,
        userMenu: state.userMenu,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const TipperLogo = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(tipperLogo) as React.ComponentClass