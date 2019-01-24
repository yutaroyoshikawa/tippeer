import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import placeDetails, { IProps } from '../layouts/placeDetails'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      placeDetails: state.placeDetails,
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const PlaceDetails = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(placeDetails) as React.ComponentClass