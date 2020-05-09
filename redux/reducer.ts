import { combineReducers } from 'redux';
import * as types from './types';

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_POSTS_SUCCESS:
      return payload.posts;
    case types.FETCH_POST_SUCCESS:
      return payload.post;

    case types.FETCH_POSTS_ERROR:
    case types.FETCH_POST_ERROR:
      return state;

    default:
      return state;
  }
};

const openedPostReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.FETCH_POST_SUCCESS:
      return payload.post;

    case types.FETCH_POST_ERROR:
      return;

    default:
      return state;
  }
};

const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case types.FETCH_POSTS_START:
    case types.FETCH_POST_START:
    case types.CREATE_POST_START:
      return true;

    case types.FETCH_POSTS_SUCCESS:
    case types.FETCH_POST_SUCCESS:
    case types.CREATE_POST_SUCCESS:
    case types.FETCH_POSTS_ERROR:
    case types.FETCH_POST_ERROR:
    case types.CREATE_POST_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.FETCH_POSTS_START:
    case types.FETCH_POST_START:
    case types.CREATE_POST_START:
    case types.FETCH_POSTS_SUCCESS:
    case types.FETCH_POST_SUCCESS:
    case types.CREATE_POST_SUCCESS:
      return null;

    case types.FETCH_POSTS_ERROR:
    case types.FETCH_POST_ERROR:
    case types.CREATE_POST_ERROR:
      return payload.error;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
  openedPost: openedPostReducer,
  isLoading: loaderReducer,
  error: errorReducer,
});

export default rootReducer;
