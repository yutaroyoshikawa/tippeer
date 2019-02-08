import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import initialLoad from '../components/initialLoad'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        initialLoad: state.initialLoad,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const InitialLoad = connect<{}, {}>(mapStateToProps, mapDispatchToProps)(initialLoad) as React.ComponentClass