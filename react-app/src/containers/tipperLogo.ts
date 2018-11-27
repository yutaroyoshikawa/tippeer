import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import tipperLogo from '../components/tipperLogo'
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

export const TipperLogo = connect(mapStateToProps, mapDispatchToProps)(tipperLogo)