import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import globalMenu from '../layouts/globalMenu'
import { IGlobalMenuState } from '../reducers/globalMenu'

interface IStore {
    globalMenu: IGlobalMenuState
}

const mapStateToProps = (state: IStore) => {
    return {
        globalMenu: state.globalMenu.globalMenu,
        tipperLogo: state.globalMenu.tipperLogo
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const GlobalMenu = connect(mapStateToProps, mapDispatchToProps)(globalMenu)