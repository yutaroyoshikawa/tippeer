import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import worksDetails, { IProps } from 'src/layouts/worksDetails'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      worksDetails: state.worksDetails,
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const WorksDetails = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(worksDetails) as React.ComponentClass