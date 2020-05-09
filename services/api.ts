import axios from 'axios';

export const fetchPosts = async () => {
  try {
    const response = await axios.get('https://simple-blog-api.crew.red/posts');
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchPostById = async (id) => {
  try {
    const response = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const createPost = async (post) => {
  try {
    const response = await axios.post('https://simple-blog-api.crew.red/posts', post);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
