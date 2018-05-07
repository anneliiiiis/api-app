import * as types from '../config/types';
import Api from '../config/api';

export function fetchPhotos(albumId) {
  return (dispatch, getState) => {
    dispatch(getPhotos());
    return Api.get(`/albums/${albumId}/photos`, null).then(resp => {
      dispatch(photosFetched(resp));
    }).catch((ex) => {
      dispatch(fetchPhotosFailed());
      console.log(ex);
    });
  }
}

function getPhotos(albumId) {
  return {
    type: types.GET_PHOTOS,
  }
}

function photosFetched(response) {
  return {
    type: types.PHOTOS_FETCHED,
    response
  }
}

function fetchPhotosFailed() {
  return {
    type: types.FETCH_PHOTOS_FAILED
  }
}