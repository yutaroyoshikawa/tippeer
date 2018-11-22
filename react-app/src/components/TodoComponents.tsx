import * as React from 'react';
import { Dispatch } from 'redux';
import { addTodo } from '../actions/TodoActions';
import { ITodoState } from '../reducers';

/* コンポーネントのProps ITodoStateを継承することで、ITodoStateの持つプロパティに加えて、dispatchを持つ */
interface IProps extends ITodoState {
  dispatch: Dispatch<any>;
}

/* コンポーネントが持つ内部State。今回は新しく追加するtodoのテキストを ReduxのStoreとは独立した内部データとして持たせる。 */
interface IState {
  text: string;
}

/* tslint:disable:jsx-no-lambda */
export default class extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      text: ''
    }
  }

  /* Propsとして渡ってきたDispatcherを経由して、ReducerにActionを投げる */
  public addTodo = () => {
    this.props.dispatch(addTodo(this.state.text))
  }

  /* Propsとして渡ってきた Redux Storeのデータをもとに自身のTodoリストをレンダリングする */
  public renderTodoList = () => (
    this.props.tasks.map((task) => (<li key={task.id.toString()}>{task.text}</li>))
  )

  public render() {
    return (
      <section style={{ width: '500px', margin: '0 auto' }}>
        <h1>MY TODO LIST</h1>
        <input
          type="text"
          value={this.state.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({ text: e.currentTarget.value })
          }}
        />
        <button onClick={() => { this.addTodo() }}>Add Todo</button>
        <ul>
          {this.renderTodoList()}
        </ul>
      </section>
    )
  }
}