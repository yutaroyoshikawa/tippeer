import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import library from '../layouts/library'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        library: state.library,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const Library = connect<{}, {}>(mapStateToProps, mapDispatchToProps)(library) as React.ComponentClass