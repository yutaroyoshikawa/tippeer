import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Provider } from 'react-redux';
<<<<<<< HEAD
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
=======
import { Route, Router, Switch } from 'react-router-dom';
import { buildStore } from './store';

const store = buildStore();
const history = createHistory();

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                    </Switch>
                </Router>
            </Provider>
        );
    }
>>>>>>> 4db33aa87bde0dd77e535a690ea2b96919e2bb97
}

export default App;
