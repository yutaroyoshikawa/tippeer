import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import manageQR, { IProps } from '../components/manageQR'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        manage: state.manage,
        manageQR: state.manageQR,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const ManageQR = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(manageQR) as React.ComponentClass