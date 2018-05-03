import  * as types from '../config/types';

const initialState = {
  error: false,
  fetching: false,
  users: [],
  user: {}
};

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_USER: {
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.USER_FETCHED: {
      console.log(action);
      return {
        ...state,
        error: false,
        fetching: false,
        user: action.response
      };
    }
    case types.FETCH_USER_FAILED: {
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
