import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import worksTop, { IProps } from '../layouts/worksTop'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => {
    return {
        worksTop: state.worksTop.worksTop
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })
export const WorksTop = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(worksTop) as React.ComponentClass