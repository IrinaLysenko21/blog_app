import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions';

const NewPostPage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(createPost());
  // }, [dispatch]);

  return <div>New post</div>;
};

export default NewPostPage;
