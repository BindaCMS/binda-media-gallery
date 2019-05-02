// https://hibbard.eu/rails-react-crud-app/

import React from 'react';
import { Route } from 'react-router-dom';
import Editor from './Editor';
import { Alert } from '../helpers/notifications';

const App = () => (
    <div>
        <Route path="/media/:id?" component={Editor} />
        <Alert stack={ { limit: 3 } } />
    </div>
);

export default App;
