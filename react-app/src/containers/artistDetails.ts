import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import artistDetails, { IProps } from '../layouts/artistDetails'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
      artistDetails: state.artistDetails.artistDetails,
    }
  }
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const ArtistDetails = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(artistDetails) as React.ComponentClass