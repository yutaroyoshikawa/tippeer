import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import tippingScan, { IProps } from '../components/tippingScan'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      tipping: state.tipping,
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const TippingScan = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(tippingScan) as React.ComponentClass