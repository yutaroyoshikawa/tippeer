import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import searchBox, { IProps } from '../components/searchBox'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        searchBox: state.searchBox.searchBox
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
export const SearchBox = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(searchBox) as React.ComponentClass