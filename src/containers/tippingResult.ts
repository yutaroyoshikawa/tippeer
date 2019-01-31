import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import tippingResult, { IProps } from '../components/tippingResult'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        auth: state.auth,
        tipping: state.tipping,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const TippingResult = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(tippingResult) as React.ComponentClass