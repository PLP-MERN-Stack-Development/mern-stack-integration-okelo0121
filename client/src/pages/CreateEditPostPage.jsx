import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postService } from '../services/api';
import { useApi } from '../hooks/useApi';

const CreateEditPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const isEditing = !!slug;

  const { data: post, loading: fetchLoading, error: fetchError, request: fetchPost } = useApi(postService.getPost);
  const { loading: submitLoading, error: submitError, request: submitPost } = useApi(isEditing ? postService.updatePost : postService.createPost);

  useEffect(() => {
    if (isEditing) {
      fetchPost(slug);
    }
  }, [slug, isEditing, fetchPost]);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, content };

    try {
      if (isEditing) {
        await submitPost(post._id, postData);
      } else {
        await submitPost(postData);
      }
      navigate('/posts');
    } catch (error) {
      // Error is already handled by the useApi hook
    }
  };

  if (fetchLoading) {
    return <div>Loading...</div>;
  }

  if (fetchError) {
    return <div>Error: {fetchError.message}</div>;
  }

  return (
    <div>
      <h1>{isEditing ? 'Edit Post' : 'Create Post'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" disabled={submitLoading}>
          {submitLoading ? 'Saving...' : (isEditing ? 'Update' : 'Create')}
        </button>
        {submitError && <div>Error: {submitError.message}</div>}
      </form>
    </div>
  );
};

export default CreateEditPostPage;
