import  * as types from '../config/types';
import _ from 'lodash';

const initialState = {
  error: false,
  fetching: false,
  comments: {}
};

export default function commentReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_COMMENTS: {
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.COMMENTS_FETCHED: {
      let  newComments = Object.assign({}, state.comments);
      newComments[_.first(action.response).postId]=action.response;
      return {
        ...state,
        error: false,
        fetching: false,
        comments: newComments
      };
    }
    case types.FETCH_COMMENTS_FAILED: {
      return {
        ...state,
        error: true,
        fetching: false
      };
    }
    default:
      return state;
  }
};
