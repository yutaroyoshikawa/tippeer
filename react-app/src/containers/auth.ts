import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import auth, { IProps } from '../components/auth'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      auth: state.auth,
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const Auth = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(auth) as React.ComponentClass