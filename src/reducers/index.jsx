import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';
import albums from './albums';
import users from './users';

export default combineReducers({
  posts, comments, users, albums
});
