import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router } from 'react-router-dom';

import { store } from '../store';
import RouteViews from './RouteViews';
import NavBar from './NavBar';

const App = () => (
    <Provider store={store}>
        <Router>
            <React.Fragment>
                <NavBar />
                <RouteViews />
            </React.Fragment>
        </Router>
    </Provider>
)



export default App;