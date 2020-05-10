import React from 'react';
import Link from 'next/link';
import { StyledPostsList, Post, PostLink, PostContentWrapper } from './PostsListStyles';
import { PostType } from '../../redux/types';

interface PostsListPropsType {
  posts: PostType[];
}

const PostsList = ({ posts }: PostsListPropsType): JSX.Element => {
  return (
    <StyledPostsList>
      {posts.map((post) => (
        <Post key={post.id}>
          <PostContentWrapper>
            <div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <PostLink>View</PostLink>
            </Link>
          </PostContentWrapper>
        </Post>
      ))}
    </StyledPostsList>
  );
};

export default PostsList;
