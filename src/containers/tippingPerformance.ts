import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import tippingPerformance, { IProps } from '../components/tippingPerformance'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        tipping: state.tipping,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const TippingPerformance = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(tippingPerformance) as React.ComponentClass