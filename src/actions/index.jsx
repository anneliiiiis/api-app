import * as PostActions from './post';
import * as CommentActions from './comment';
import * as UserActions from './user';

export const ActionCreators = Object.assign({},
  PostActions, CommentActions, UserActions
);
