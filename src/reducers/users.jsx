import  * as types from '../config/types';
import _ from 'lodash';

const initialState = {
  error: false,
  fetching: false,
  users: {}
};

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_USER:
    case types.GET_USERS: {
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.USERS_FETCHED: {
      let  newUsers = Object.assign({}, state.users);
      _.forEach(action.response, (user, _index) => {
        newUsers[user.id] = user
      });
      return {
        ...state,
        error: false,
        fetching: false,
        users: newUsers
      };
    }
    case types.FETCH_USERS_FAILED:
    case types.FETCH_USER_FAILED: {
      return {
        ...state,
        error: true,
        fetching: false,
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
    default:
      return state;
  }
};
