import * as PostActions from './post';
import * as UserActions from './user';
import * as CommentActions from './comment';

export const ActionCreators = Object.assign({},
  PostActions, CommentActions, UserActions
);
