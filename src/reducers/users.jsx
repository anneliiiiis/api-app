import  * as types from '../config/types';

const initialState = {
  error: false,
  fetching: false,
  users: {}
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
      let  newUsers = Object.assign({}, state.users);
      newUsers[action.response.id] = action.response;
      return {
        ...state,
        error: false,
        fetching: false,
        users: newUsers
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
