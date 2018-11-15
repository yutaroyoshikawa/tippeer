import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import WorksStore from '../components/WorksStore'
import { IWorksState } from '../reducers/WorksStore'

const mapStateToProps = (state: IWorksState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch })

export const WorksStorePage = connect(mapStateToProps, mapDispatchToProps)(WorksStore)