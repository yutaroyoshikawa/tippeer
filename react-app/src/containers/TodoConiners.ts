import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoComponent from '../components/TodoComponents';
import { ITodoState } from '../reducers';

/* 操作を加えることもできるが、今回は何も操作を加えない stateをそのままPropsに渡す */
const mapStateToProps = (state: ITodoState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

/* ReduxのStore由来のデータとDispatcherをPropsに格納して、TodoComponentに渡す。 */
export const Todo =  connect(mapStateToProps, mapDispatchToProps)(TodoComponent);