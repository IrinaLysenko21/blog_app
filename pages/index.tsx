import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import PostsList from '../components/PostsList/PostsList';

const LatestPosts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <PageWrapper title="Latest posts">
      <PostsList posts={posts} />
    </PageWrapper>
  );
};

export default LatestPosts;
