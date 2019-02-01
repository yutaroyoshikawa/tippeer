import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import adminManage, { IProps } from '../components/adminManage'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      manage: state.manage,
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const AdminManage = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(adminManage) as React.ComponentClass