import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import back from '../components/back'

const mapStateToProps = (state: any) => {
    return {
        back: state.back.back
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
export const Back = connect(mapStateToProps, mapDispatchToProps)(back)