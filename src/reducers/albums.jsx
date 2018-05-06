import  * as types from '../config/types';
import _ from 'lodash';

const initialState = {
  error: false,
  fetching: false,
  albums: {}
};

export default function AlbumReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_ALBUMS: {
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.ALBUMS_FETCHED: {
      let  newAlbums = Object.assign({}, state.albums);
      newAlbums[_.first(action.response).userId]=action.response;
      return {
        ...state,
        error: false,
        fetching: false,
        albums: newAlbums
      };
    }
    case types.FETCH_ALBUMS_FAILED: {
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
