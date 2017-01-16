import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import './index.css';
import {Provider} from 'react-redux';
import state from './State';
import App from './App';

ReactDOM.render(
    (
        <Provider store={state}>
            <App />
        </Provider>
    ),
    document.getElementById('root')
);
