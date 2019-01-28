import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Dispatch } from 'redux'
import searchBox, { IProps } from '../components/searchBox'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        globalMenu: state.globalMenu,
        searchBox: state.searchBox,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
export const SearchBoxInput = withRouter<any>(connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(searchBox) as React.ComponentClass)