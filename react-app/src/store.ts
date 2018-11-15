import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const composeEnhancers = composeWithDevTools({});

/* production環境でない場合にはRedux Dev Toolsを有効化する */
export const buildStore = () => (
  process.env.NODE_ENV === 'production' ?
  createStore(
    reducers,
  )
  :
  createStore(
    reducers,
    composeEnhancers()
  )
)