import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PostListPage from './pages/PostListPage';
import SinglePostPage from './pages/SinglePostPage';
import CreateEditPostPage from './pages/CreateEditPostPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/posts/:slug" element={<SinglePostPage />} />
          <Route path="/create-post" element={<CreateEditPostPage />} />
          <Route path="/edit-post/:slug" element={<CreateEditPostPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
