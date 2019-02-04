import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import manageWorks, { IProps } from '../components/manageWorks'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        manage: state.manage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const ManageWorks = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(manageWorks) as React.ComponentClass