import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postService } from '../services/api';
import { useApi } from '../hooks/useApi';

const SinglePostPage = () => {
  const { slug } = useParams();
  const { data: post, error, loading, request: fetchPost } = useApi(postService.getPost);

  useEffect(() => {
    fetchPost(slug);
  }, [fetchPost, slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </div>
  );
};

export default SinglePostPage;
