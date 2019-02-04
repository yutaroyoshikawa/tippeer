import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import 'ress'
// import 'semantic-ui-css/semantic.min.css'
import { Dialog, Faq, Notification, PrivacyPolicy, UserPage } from './components'
import { GlobalMenu } from './containers/globalMenu'
import { ArtistDetails, Library, Manage, NotFound, PerformanceDetails, PlaceDetails, Search, Tipping, WorksDetails, WorksTop } from './layouts'
import { buildStore } from './store';
import * as Styled from './styles/app'

const store = buildStore();
const history = createHistory();

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <div>
                        <GlobalMenu />
                        <Styled.GlobalStyle />
                        <Notification />
                        <Dialog />
                        <Switch>
                            <Route exact={true} path='/faq' component={Faq} />
                            <Route exact={true} path='/privacypolicy' component={PrivacyPolicy} />
                            <Route exact={true} path='/' component={UserPage} />
                            <Route exact={true} path='/search' component={Search} />
                            <Route exact={true} path='/search/:searchWord' component={Search} />
                            <Route exact={true} path='/places/:placeId' component={PlaceDetails} />
                            <Route exact={true} path='/works/:worksId' component={WorksDetails} />
                            <Route exact={true} path='/performances/:performanceId' component={PerformanceDetails} />
                            <Route exact={true} path='/artists/:artistId' component={ArtistDetails} />
                            <Route exact={true} path='/works' component={WorksTop} />
                            <Route exact={true} path='/tipping' component={Tipping} />
                            <Route exact={true} path='/tipping/:tippingToken' component={Tipping} />
                            <Route exact={true} path='/library' component={Library} />
                            <Route exact={true} path='/manage' component={Manage} />
                            <Route exact={true} path='/manage/:managePage' component={Manage} />
                            <Route exact={false} path='*' component={NotFound} status={404} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
