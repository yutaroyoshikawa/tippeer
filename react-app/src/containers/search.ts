import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import search from '../layouts/search'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

// interface IOwnProps {
//     match: {
//         params: {
//             searchWord: string | undefined
//         }
//     }
// }

const mapStateToProps = (state: AllState) => {
    return {
        globalMenu: state.globalMenu.globalMenu,
        search: state.globalMenu.search,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const Search = connect<{}, {}>(mapStateToProps, mapDispatchToProps)(search)