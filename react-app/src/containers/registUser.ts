import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import registUser, { IProps } from '../components/registUser'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      registUser: state.registUser,
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const RegistUser = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(registUser) as React.ComponentClass