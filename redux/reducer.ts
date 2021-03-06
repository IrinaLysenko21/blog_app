import { combineReducers } from 'redux';
import * as types from './types';

type postsActionType = types.FetchPostsSuccessType | types.FetchPostsErrorType;

const postsReducer = (state = [], action: postsActionType): types.PostType[] => {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS:
      return action.payload.posts;

    case types.FETCH_POSTS_ERROR:
      return state;

    default:
      return state;
  }
};

const openedPostReducer = (state = null, action): types.PostType => {
  switch (action.type) {
    case types.FETCH_POST_SUCCESS:
      return action.payload.post;

    case types.FETCH_POST_ERROR:
      return state;

    default:
      return state;
  }
};

const loaderReducer = (state = false, action: types.allActionsType): boolean => {
  switch (action.type) {
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

const errorReducer = (state = null, { type, payload }): {} | null => {
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
