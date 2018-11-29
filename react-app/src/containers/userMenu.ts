import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import userMenu, { IProps } from '../components/userMenu'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      userMenu: state.userMenu.userMenu
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const UserMenu = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(userMenu) as React.ComponentClass