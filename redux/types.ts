export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_START = 'FETCH_POST_START';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_START = 'CREATE_POST_START';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR';

export interface CommentInterface {
  id: number;
  postId: number;
  body: string;
}

export interface PostInterface {
  id: number;
  title: string;
  body: string;
  comments?: CommentInterface[] | [];
}

export interface StoreInterface {
  posts: PostInterface[] | [];
  isLoading: boolean;
}

// export interface FetchPostsInterface {
//   type: typeof FETCH_POSTS;
//   payload: {
//     posts: PostInterface[];
//   };
// }

// export interface FetchOnePostInterface {
//   type: typeof FETCH_POST;
//   payload: {
//     post: PostInterface;
//   };
// }
