import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { fetchPosts } from '../redux/actions';

const LatestPosts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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

export default LatestPosts;
