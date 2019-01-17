import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import dialog, { IProps } from '../components/dialog'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      dialog: state.dialog,
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const Dialog = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(dialog) as React.ComponentClass