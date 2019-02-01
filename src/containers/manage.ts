import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import manage, { IProps } from '../layouts/manage'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        auth: state.auth,
        manage: state.manage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const Manage = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(manage) as React.ComponentClass