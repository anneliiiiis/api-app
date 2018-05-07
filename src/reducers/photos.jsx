import  * as types from '../config/types';
import _ from 'lodash';

const initialState = {
  error: false,
  fetching: false,
  photos: {}
};

export default function PhotoReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_PHOTOS: {
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.PHOTOS_FETCHED: {
      let  newPhotos = Object.assign({}, state.photos);
      newPhotos[_.first(action.response).albumId]=action.response;
      return {
        ...state,
        error: false,
        fetching: false,
        photos: newPhotos
      };
    }
    case types.FETCH_PHOTOS_FAILED: {
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

