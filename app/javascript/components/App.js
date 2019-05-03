// https://hibbard.eu/rails-react-crud-app/

import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import Editor from './Editor';
import { Alert } from '../helpers/notifications';
import createStore from '../store/configureStore'
import { loadMedia } from '../actions/mediumActions'

const store = createStore();
store.dispatch(loadMedia())

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/media/:id?" component={Editor} />
            <Alert stack={ { limit: 3 } } />
        </BrowserRouter>
    </Provider>
);

export default App;
