import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import Favorites from './Favorites';

const rootReducer = combineReducers({
  Favorites,
  form: formReducer
});

export default rootReducer;