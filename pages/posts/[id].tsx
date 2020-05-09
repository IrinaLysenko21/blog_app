import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOnePost } from '../../redux/actions';

const PostPage = () => {
  const router = useRouter();
  const postId = router.query.id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOnePost(postId));
  }, [dispatch, postId]);

  const post = useSelector((state) => state.openedPost);
  console.log(post);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {post.comments > 0 ? (
        <ul>
          {post.comments.map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      ) : (
        <p>No comments for this post</p>
      )}
    </div>
  );
};

export default PostPage;
