import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import tipperLogo, { IProps } from '../components/tipperLogo'
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

export const TipperLogo = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(tipperLogo) as React.ComponentClass