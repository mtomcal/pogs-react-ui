import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import 'bootstrap-material-design/dist/css/ripples.css';
import './index.css';
import { Provider } from 'react-redux';
import state from './State';
import App from './App';

ReactDOM.render(
  <Provider store={state}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
