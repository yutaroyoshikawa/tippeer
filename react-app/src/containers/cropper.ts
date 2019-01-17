import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import cropper, { IProps } from '../components/cropper'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      cropper: state.cropper,
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const Cropper = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(cropper) as React.ComponentClass