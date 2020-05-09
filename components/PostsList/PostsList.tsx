import React from 'react';
import Link from 'next/link';
import { StyledPostsList, Post, PostLink } from './PostsListStyles';
import { PostInterface } from '../../redux/types';

interface PostsListProps {
  posts: PostInterface[];
}

const PostsList = ({ posts }: PostsListProps): JSX.Element => {
  return (
    <StyledPostsList>
      {posts.map((post) => (
        <Post key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <PostLink>View</PostLink>
          </Link>
        </Post>
      ))}
    </StyledPostsList>
  );
};

export default PostsList;
