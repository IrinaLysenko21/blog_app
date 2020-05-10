import React from 'react';
import { PostType, CommentType } from '../../redux/types';

interface PostPropsType {
  post: PostType;
}

const Post = ({ post }: PostPropsType): JSX.Element => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {post.comments && post.comments.length > 0 ? (
        <>
          <h3>Comments</h3>
          <ul>
            {(post.comments as Array<CommentType>).map((comment) => (
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
