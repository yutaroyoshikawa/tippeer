import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import managePerformance, { IProps } from '../components/managePerformance'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        manage: state.manage,
        managePerformance: state.managePerformance,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const ManagePerformance = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(managePerformance) as React.ComponentClass