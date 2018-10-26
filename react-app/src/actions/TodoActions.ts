import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

/* actionCreator()で型指定しながらActionをつくる。 string型のpayload (データ) を伴ってこのActionが発行されるよう定義する。 */
export const addTodo = actionCreator<string>(
  'ADD_TODO',
);