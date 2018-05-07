import * as types from '../config/types';
import Api from '../config/api';

export function fetchAlbums(userId) {
  return (dispatch, getState) => {
    dispatch(getAlbums());
    return Api.get(`/users/${userId}/albums`, null).then(resp => {
      dispatch(albumsFetched(resp));
    }).catch((ex) => {
      dispatch(fetchAlbumsFailed());
      console.log(ex);
    });
  }
}

export const deleteAlbum = (id) => {
  return {
    type: types.DELETE_ALBUM,
    id: id
  }
}

function getAlbums(userId) {
  return {
    type: types.GET_ALBUMS,
  }
}

function albumsFetched(response) {
  return {
    type: types.ALBUMS_FETCHED,
    response
  }
}

function fetchAlbumsFailed() {
  return {
    type: types.FETCH_ALBUMS_FAILED
  }
}