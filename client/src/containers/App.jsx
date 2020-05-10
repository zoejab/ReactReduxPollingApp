import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store';
import ErrorMessage from '../components/ErrorMessage';

const App = () => (
    <Provider store={store}>
       <div> App works. </div> 
       <ErrorMessage />
    </Provider>
)

export default App;