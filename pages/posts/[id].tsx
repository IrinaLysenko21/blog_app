import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOnePost } from '../../redux/actions';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Post from '../../components/Post/Post';

const PostPage = (): JSX.Element => {
  const router = useRouter();
  const postId = router.query.id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOnePost(postId));
  }, [dispatch, postId]);

  const post = useSelector((state) => state.openedPost);

  return <PageWrapper>{post && <Post post={post} />}</PageWrapper>;
};

export default PostPage;
