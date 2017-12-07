import thunkMiddleware from 'redux-thunk';
import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import { Profile } from './redux/reducers/profile';
import { Search } from './redux/reducers/search';
import { Domains } from './redux/reducers/domains';

export default createStore(
  combineReducers({
    Domains,
    Profile,
    Search,
  }),
  compose(
    applyMiddleware(thunkMiddleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      (data => data),
  ),
);
