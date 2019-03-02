import { combineReducers } from 'redux';

import entityReducer from './reducers/entityReducer';
import postReducer from './reducers/postReducer';
import authorReducer from './reducers/authorReducer';

export default combineReducers({
  posts: postReducer,
  authors: authorReducer,
  entities: entityReducer,
});
