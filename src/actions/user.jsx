import * as types from '../config/types';
import Api from '../config/api';

export function fetchUser(id) {
  return (dispatch, getState) => {
    dispatch(getUser());
    return Api.get(`/users/${id}`, null).then(resp => {
      dispatch(userFetched(resp));
    }).catch((ex) => {
      dispatch(fetchUserFailed());
      console.log(ex);
    });
  }
}

function getUser(id) {
  return {
    type: types.GET_USER,
  }
}

function userFetched(response) {
  return {
    type: types.USER_FETCHED,
    response
  }
}

function fetchUserFailed() {
  return {
    type: types.FETCH_USER_FAILED
  }
}
