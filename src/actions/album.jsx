import * as types from '../config/types';
import Api from '../config/api';

export function fetchAlbums() {
  return (dispatch, getState) => {
    dispatch(getAlbums());
    return Api.get(`/Albums`, null).then(resp => {
      dispatch(AlbumsFetched(resp));
    }).catch((ex) => {
      dispatch(fetchAlbumsFailed());
      console.log(ex);
    });
  }
}

export function fetchAlbum(id) {
  return (dispatch, getState) => {
    dispatch(getAlbum());
    return Api.get(`/Albums/${id}`, null).then(resp => {
      dispatch(AlbumFetched(resp));
    }).catch((ex) => {
      dispatch(fetchAlbumFailed());
      console.log(ex);
    });
  }
}

function getAlbums() {
  return {
    type: types.GET_AlbumS,
  }
}

function AlbumsFetched(response) {
  return {
    type: types.AlbumS_FETCHED,
    response
  }
}

function fetchAlbumsFailed() {
  return {
    type: types.FETCH_AlbumS_FAILED
  }
}
function getAlbum(id) {
  return {
    type: types.GET_Album,
  }
}

function AlbumFetched(response) {
  return {
    type: types.Album_FETCHED,
    response
  }
}

function fetchAlbumFailed(id) {
  return {
    type: types.FETCH_Album_FAILED
  }
}
