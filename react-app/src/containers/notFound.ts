import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import notFound, { IProps } from '../layouts/notFound'
import {buildStore} from '../store'

const store = buildStore()
type AllState = ReturnType<typeof store.getState>

const mapStateToProps = (state: AllState) => ({})
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export const NotFound = connect<{}, {}, IProps>(mapStateToProps, mapDispatchToProps)(notFound) as React.ComponentClass