import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import PageWrapper from '../components/PageWrapper/PageWrapper';
import PostsList from '../components/PostsList/PostsList';
import Loader from '../components/Loader/Loader';

const LatestPosts = (): JSX.Element => {
  const posts = useSelector((state) => state.posts);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <PageWrapper title="Latest posts">{posts.length > 0 && <PostsList posts={posts} />}</PageWrapper>
    </>
  );
};

export default LatestPosts;
