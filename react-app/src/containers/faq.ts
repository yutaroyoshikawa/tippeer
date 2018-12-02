import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import faq from '../layouts/faq'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        globalMenu: state.globalMenu.globalMenu,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const Faq = connect<{}, {}>(mapStateToProps, mapDispatchToProps)(faq) as React.ComponentClass