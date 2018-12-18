import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import tipping, { IProps } from '../layouts/tipping'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      tipping: state.tipping.tipping
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const Tipping = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(tipping) as React.ComponentClass