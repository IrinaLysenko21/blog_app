import axios from 'axios';
import * as types from '../redux/types';

export const fetchPosts = async (): Promise<types.PostType[]> => {
  try {
    const response = await axios.get('https://simple-blog-api.crew.red/posts');
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchPostById = async (id): Promise<types.PostType> => {
  try {
    const response = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const createPost = async (post): Promise<types.PostType> => {
  try {
    const response = await axios.post('https://simple-blog-api.crew.red/posts', post);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
