import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadPosts, selectAllPosts, isLoading } from './postsSlice';
import Post from '../../components/post/Post';

function Posts() {

  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const isLoadingPosts = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  if (isLoadingPosts) {
    return (
      <div className='Posts-loading'>
        <h1><span className="highlight"> loading </span></h1>
      </div>
    );
  }

  return (
    <div className='Posts'>
      {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}

export default Posts;