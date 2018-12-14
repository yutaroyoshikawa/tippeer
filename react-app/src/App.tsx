import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import 'ress'
import { Faq, PrivacyPolicy, UserPage } from './components'
import { GlobalMenu } from './containers/globalMenu'
import { NotFound, PerformanceDetails, PlaceDetails, Search, WorksDetails } from './layouts'
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
                        <div style={{padding: '50px 0'}} >
                            <Switch>
                                <Route exact={true} path='/faq' component={Faq} />
                                <Route exact={true} path='/privacypolicy' component={PrivacyPolicy} />
                                <Route exact={true} path='/' component={UserPage} />
                                <Route exact={true} path='/search' component={Search} />
                                <Route exact={true} path='/search/:searchWord' component={Search} />
                                <Route exact={true} path='/places/:placeId' component={PlaceDetails} />
                                <Route exact={true} path='/works/:worksId' component={WorksDetails} />
                                <Route exact={true} path='/performances/:performanceId' component={PerformanceDetails} />
                                <Route exact={false} path='*' component={NotFound} status={404} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
