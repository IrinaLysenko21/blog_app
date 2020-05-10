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

export interface CommentType {
  id: number;
  postId: number;
  body: string;
}

export interface PostType {
  id: number;
  title: string;
  body: string;
  comments?: CommentType[] | [];
}

export interface StoreType {
  posts: PostType[] | [];
  openedPost: PostType | null;
  isLoading: boolean;
  error: {} | null;
}

// Fetch posts actions interfaces

export interface FetchPostsType {
  type: typeof FETCH_POSTS;
}

export interface FetchPostsStartType {
  type: typeof FETCH_POSTS_START;
}

export interface FetchPostsSuccessType {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: {
    posts: PostType[];
  };
}

export interface FetchPostsErrorType {
  type: typeof FETCH_POSTS_ERROR;
  payload: {
    error: {};
  };
}

// Fetch one post actions interfaces

export interface FetchOnePostType {
  type: typeof FETCH_POST;
  payload: {
    id: number;
  };
}

export interface FetchOnePostStartType {
  type: typeof FETCH_POST_START;
}

export interface FetchOnePostSuccessType {
  type: typeof FETCH_POST_SUCCESS;
  payload: {
    post: PostType;
  };
}

export interface FetchOnePostErrorType {
  type: typeof FETCH_POST_ERROR;
  payload: {
    error: {};
  };
}

// Create post actions interfaces

export interface CreatePostType {
  type: typeof CREATE_POST;
  payload: {
    post: PostType;
  };
}

export interface CreatePostStartType {
  type: typeof CREATE_POST_START;
}

export interface CreatePostSuccessType {
  type: typeof CREATE_POST_SUCCESS;
}

export interface CreatePostErrorType {
  type: typeof CREATE_POST_ERROR;
  payload: {
    error: {};
  };
}
