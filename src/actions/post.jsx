import * as types from '../config/types';
import Api from '../config/api';

export function fetchPosts() {
  return (dispatch, getState) => {
    dispatch(getPosts());
    return Api.get(`/posts`, null).then(resp => {
      dispatch(postsFetched(resp));
    }).catch((ex) => {
      dispatch(fetchPostsFailed());
      console.log(ex);
    });
  }
}

export function createPost(postData) {
  return (dispatch, getState) => {
    console.log(postData);
    return Api.post(`/posts`, postData).then(resp => {
      dispatch(newPost(resp));
    })
  }
}


export function fetchPost(id) {
  return (dispatch, getState) => {
    dispatch(getPost());
    return Api.get(`/posts/${id}`, null).then(resp => {
      dispatch(postFetched(resp));
    }).catch((ex) => {
      dispatch(fetchPostFailed());
      console.log(ex);
    });
  }
}

function newPost(response) {
  return {
    type: types.NEW_POST,
    response
  }
}

function getPosts() {
  return {
    type: types.GET_POSTS,
  }
}

function postsFetched(response) {
  return {
    type: types.POSTS_FETCHED,
    response
  }
}

function fetchPostsFailed() {
  return {
    type: types.FETCH_POSTS_FAILED
  }
}

function getPost(id) {
  return {
    type: types.GET_POST,
  }
}

function postFetched(response) {
  return {
    type: types.POST_FETCHED,
    response
  }
}

function fetchPostFailed(id) {
  return {
    type: types.FETCH_POST_FAILED
  }
}
