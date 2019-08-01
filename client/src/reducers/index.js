import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postReducer from './postReducer';
import authFBReducer from './authFBReducer';

export default combineReducers({
  auth: authReducer,
  authFB: authFBReducer,
  posts: postReducer,
});
