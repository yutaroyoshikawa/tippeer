<<<<<<< HEAD
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const composeEnhancers = composeWithDevTools({});
=======
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import { rootSaga } from './sagas'

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
>>>>>>> 4db33aa87bde0dd77e535a690ea2b96919e2bb97

/* production環境でない場合にはRedux Dev Toolsを有効化する */
export const buildStore = () => (
  process.env.NODE_ENV === 'production' ?
<<<<<<< HEAD
  createStore(
    reducers,
  )
  :
  createStore(
    reducers,
    composeEnhancers()
  )
)
=======
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
>>>>>>> 4db33aa87bde0dd77e535a690ea2b96919e2bb97
