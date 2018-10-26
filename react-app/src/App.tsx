import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Todo, WorksStorePage } from './components/index';
import { buildStore } from './store';

const store = buildStore();

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div>
          <Route exact={true} path='/' component={Todo} />
          <Route exact={true} path='/worksstore' component={WorksStorePage} />
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
