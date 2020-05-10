import React from 'react';
import { PostType, CommentType } from '../../redux/types';
import { Description, CommentsList, CommentsText } from './PostStyles';

interface PostPropsType {
  post: PostType;
}

const Post = ({ post }: PostPropsType): JSX.Element => {
  return (
    <div>
      <h2>{post.title}</h2>
      <Description>{post.body}</Description>
      <h3>Comments</h3>
      {post.comments && post.comments.length > 0 ? (
        <CommentsList>
          {(post.comments as Array<CommentType>).map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </CommentsList>
      ) : (
        <CommentsText>No comments for this post</CommentsText>
      )}
    </div>
  );
};

export default Post;
