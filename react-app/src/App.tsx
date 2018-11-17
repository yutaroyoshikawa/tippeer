import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import GlobalMenu from './layouts/globalMenu'
import { buildStore } from './store';


const store = buildStore();
const history = createHistory();

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <GlobalMenu />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
