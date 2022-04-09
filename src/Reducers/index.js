import { combineReducers } from 'redux';
import posts from './post';
import auth from './auth';
import signup from './signup';
export default combineReducers({
  posts,
  auth,
  signup,
});
