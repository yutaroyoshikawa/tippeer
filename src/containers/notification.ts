import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import notification, { IProps } from '../components/notification'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      notifications: state.notifications,
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const Notification = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(notification) as React.ComponentClass