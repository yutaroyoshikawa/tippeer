import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import userMenu from '../components/userMenu'

const mapStateToProps = (state: any) => {
    return {
      userMenu: state.userMenu.userMenu
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const UserMenu = connect(mapStateToProps, mapDispatchToProps)(userMenu)