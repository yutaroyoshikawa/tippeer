import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import tippingTop, { IProps } from '../components/tippingTop'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      tipping: state.tipping,
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const TippingTop = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(tippingTop) as React.ComponentClass