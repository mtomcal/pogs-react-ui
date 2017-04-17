import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import Favorites from './Favorites';
import Search from './Search';
import Profile from './Profile';

const rootReducer = combineReducers({
  Favorites,
  Search,
  Profile,
  form: formReducer
});

export default rootReducer;