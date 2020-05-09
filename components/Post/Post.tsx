import React from 'react';
import { PostInterface, CommentInterface } from '../../redux/types';

interface PostProps {
  post: PostInterface;
}

const Post = ({ post }: PostProps): JSX.Element => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {post.comments && post.comments.length > 0 ? (
        <>
          <h3>Comments</h3>
          <ul>
            {(post.comments as Array<CommentInterface>).map((comment) => (
              <li key={comment.id}>{comment.body}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>No comments for this post</p>
      )}
    </div>
  );
};

export default Post;
