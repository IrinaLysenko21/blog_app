import React from 'react';
import Link from 'next/link';

const PostsList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <a>View</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
