import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import tippingPay, { IProps } from '../components/tippingPay'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      tipping: state.tipping,
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const TippingPay = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(tippingPay) as React.ComponentClass