import * as types from './types';

// Fetch posts actions

export const fetchPosts = (): types.FetchPostsType => ({
  type: types.FETCH_POSTS,
});

export const FetchPostsStart = (): types.FetchPostsStartType => ({
  type: types.FETCH_POSTS_START,
});

export const FetchPostsSuccess = (posts): types.FetchPostsSuccessType => ({
  type: types.FETCH_POSTS_SUCCESS,
  payload: {
    posts,
  },
});

export const FetchPostsError = (error): types.FetchPostsErrorType => ({
  type: types.FETCH_POSTS_ERROR,
  payload: {
    error,
  },
});

// Fetch one post actions

export const fetchOnePost = (id): types.FetchOnePostType => ({
  type: types.FETCH_POST,
  payload: {
    id,
  },
});

export const fetchOnePostStart = (): types.FetchOnePostStartType => ({
  type: types.FETCH_POST_START,
});

export const fetchOnePostSuccess = (post): types.FetchOnePostSuccessType => ({
  type: types.FETCH_POST_SUCCESS,
  payload: {
    post,
  },
});

export const fetchOnePostError = (error): types.FetchOnePostErrorType => ({
  type: types.FETCH_POST_ERROR,
  payload: {
    error,
  },
});

// Create post actions

export const createPost = (post): types.CreatePostType => ({
  type: types.CREATE_POST,
  payload: {
    post,
  },
});

export const createPostStart = (): types.CreatePostStartType => ({
  type: types.CREATE_POST_START,
});

export const createPostSuccess = (): types.CreatePostSuccessType => ({
  type: types.CREATE_POST_SUCCESS,
});

export const createPostError = (error): types.CreatePostErrorType => ({
  type: types.CREATE_POST_ERROR,
  payload: {
    error,
  },
});
