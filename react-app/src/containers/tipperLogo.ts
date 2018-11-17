import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import tipperLogo from '../components/tipperLogo'

const mapStateToProps = (state: any) => {
    return {
        tipperLogo: state.tipperLogo.tipperLogo
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const TipperLogo = connect(mapStateToProps, mapDispatchToProps)(tipperLogo)