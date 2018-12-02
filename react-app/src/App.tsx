import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import 'ress'
import { Faq, PrivacyPolicy, UserPage } from './components'
import { GlobalMenu } from './containers/globalMenu'
import { buildStore } from './store';


const store = buildStore();
const history = createHistory();

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div>
                        <GlobalMenu />
                        <Switch>
                            <div style={{padding: '50px 0'}}>
                            <Route exact={true} path='/faq' component={Faq} />
                            <Route exact={true} path='/privacypolicy' component={PrivacyPolicy} />
                            <Route exact={true} path='/' component={UserPage} />
                            </div>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
