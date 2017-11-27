import thunkMiddleware from 'redux-thunk';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Profile } from './redux/reducers/profile';
import { Search } from './redux/reducers/search';
import { Domains } from './redux/reducers/domains';

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore);

export default finalCreateStore(
  combineReducers({
    Domains,
    Profile,
    Search,
  }),
);
