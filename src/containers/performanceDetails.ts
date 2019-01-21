import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import performanceDetails from '../layouts/performanceDetails'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        performanceDetails: state.performanceDetails
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const PerformanceDetails = connect<{}, {}>(mapStateToProps, mapDispatchToProps)(performanceDetails)