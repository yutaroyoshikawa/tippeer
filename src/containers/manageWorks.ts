import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import manageWorks, { IProps } from '../components/manageWorks'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        cropper: state.cropper,
        manage: state.manage,
        manageWorks: state.manageWorks,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const ManageWorks = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(manageWorks) as React.ComponentClass