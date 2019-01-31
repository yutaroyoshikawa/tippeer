import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import tippingThanks, { IProps } from '../components/tippingThanks'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      tipping: state.tipping,
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const TippingThanks = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(tippingThanks) as React.ComponentClass