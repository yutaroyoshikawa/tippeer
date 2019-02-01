import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import libraryTab, { IProps } from '../components/libraryTab'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        library: state.library,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const LibraryTab = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(libraryTab) as React.ComponentClass