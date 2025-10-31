import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postService } from '../services/api';

const CreateEditPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const isEditing = !!slug;

  useEffect(() => {
    if (isEditing) {
      const fetchPost = async () => {
        try {
          const data = await postService.getPost(slug);
          setTitle(data.title);
          setContent(data.content);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };
      fetchPost();
    }
  }, [slug, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, content };

    try {
      if (isEditing) {
        await postService.updatePost(slug, postData);
      } else {
        await postService.createPost(postData);
      }
      navigate('/posts');
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

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
        <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default CreateEditPostPage;
