import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import searchBox from '../components/searchBox'

const mapStateToProps = (state: any) => {
    return {
        searchBox: state.searchBox.searchBox
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
export const SearchBox = connect(mapStateToProps, mapDispatchToProps)(searchBox)