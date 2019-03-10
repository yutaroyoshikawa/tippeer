import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import manageArtist, { IProps } from '../components/manageArtist'
import { buildStore } from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        manage: state.manage,
        manageArtist: state.manageArtist,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const ManageArtist = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(manageArtist) as React.ComponentClass