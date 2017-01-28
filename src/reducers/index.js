import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import Favorites from './Favorites';
import Search from './Search';

const rootReducer = combineReducers({
  Favorites,
  Search,
  form: formReducer
});

export default rootReducer;