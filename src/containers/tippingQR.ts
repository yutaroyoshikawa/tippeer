import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import tippingQR, { IProps } from '../components/tippingQR'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        globalMenu: state.globalMenu,
        manage: state.manage,
        manageQR: state.manageQR,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const TippingQR = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(tippingQR) as React.ComponentClass