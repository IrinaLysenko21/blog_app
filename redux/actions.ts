import { FETCH_POSTS, FETCH_POST, CREATE_POST } from './types';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const fetchOnePost = (id) => ({
  type: FETCH_POST,
  payload: {
    id,
  },
});

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: {
    post,
  },
});
