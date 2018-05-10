import  * as types from '../config/types';
import _ from 'lodash';

const initialState = {
  error: false,
  fetching: false,
  posts: {}
};

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case types.NEW_POST: {
      let  newPosts = Object.assign({}, state.posts);
      newPosts[action.response.id] = action.response;
      return {
        ...state,
        error: false,
        fetching: false,
        posts: newPosts
      };
    }
    case types.GET_POST:
    case types.GET_POSTS: {
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.POSTS_FETCHED: {
      let  newPosts = Object.assign({}, state.posts);
      _.forEach(action.response, (post, _index) => {
        newPosts[post.id] = post
      });
      return {
        ...state,
        error: false,
        fetching: false,
        posts: newPosts
      };
    }
    case types.FETCH_POST_FAILED:
    case types.FETCH_POSTS_FAILED: {
      return {
        ...state,
        error: true,
        fetching: false
      };
    }
    case types.POST_FETCHED: {
      let  newPosts = Object.assign({}, state.posts);
      newPosts[action.response.id] = action.response;
      return {
        ...state,
        error: false,
        fetching: false,
        posts: newPosts
      };
    }
    default:
      return state;
  }
};
