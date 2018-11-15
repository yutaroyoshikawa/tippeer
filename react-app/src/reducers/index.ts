import { reducerWithInitialState } from 'typescript-fsa-reducers';

/* すべてのActionをインポート */
import * as actions from '../actions/TodoActions';

/* tasks[] 配列に格納するオブジェクトの型を定義する */
interface ITask {
  id: number;
  text: string;
  done: boolean;
}

/* Storeの型を定義する。 */
export interface ITodoState {
  tasks: ITask[];
}

/* 初期状態のStoreのデータを定義する */
const initialReduceTodoState: ITodoState = {
  tasks: [
    {
        done: false,
        id: 1,
        text: 'initial task',
    }],
};

let idCounter: number = 1;

/* Taskを作成する。ITaskという指定された型を返す。 */
const buildTask = (text: string): ITask => ({
  done: false,
  id: ++idCounter,
  text,
})

export default reducerWithInitialState(initialReduceTodoState)
  .case(actions.addTodo, (state: ITodoState, payload) => ({
    ...state,
    tasks: state.tasks.concat(
      buildTask(payload)
    )
  }))
  .build();