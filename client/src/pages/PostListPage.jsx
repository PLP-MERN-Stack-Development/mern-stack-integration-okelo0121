import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postService } from '../services/api';
import { useApi } from '../hooks/useApi';

const PostListPage = () => {
  const { data: posts, error, loading, request: fetchPosts } = useApi(postService.getAllPosts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>All Posts</h1>
      {posts && posts.map((post) => (
        <div key={post._id}>
          <h2>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default PostListPage;
