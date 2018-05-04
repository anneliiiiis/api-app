import  * as types from '../config/types';
import _ from 'lodash';

const initialState = {
  error: false,
  fetching: false,
  albums: {}
};

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_ALBUM:
    case types.GET_ALBUMS: {
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.ALBUMS_FETCHED: {
      let  newAlbumss = Object.assign({}, state.albums);
      _.forEach(action.response, (album, _index) => {
        newAlbums[album.id] = album
      });
      return {
        ...state,
        error: false,
        fetching: false,
        albums: newAlbums
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
      let  newAlbums = Object.assign({}, state.albums);
      newAlbums[action.response.id] = action.response;
      return {
        ...state,
        error: false,
        fetching: false,
        albums: newAlbums
      };
    }
    default:
      return state;
  }
};
