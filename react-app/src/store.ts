import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import { rootSaga } from './sagas'

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

/* production環境でない場合にはRedux Dev Toolsを有効化する */
export const buildStore = () => (
  process.env.NODE_ENV === 'production' ?
    createStore(
      reducers,
      applyMiddleware(sagaMiddleware)
    )
    :
    createStore(
      reducers,
      composeEnhancers(applyMiddleware(sagaMiddleware))
    )
)

sagaMiddleware.run(rootSaga)