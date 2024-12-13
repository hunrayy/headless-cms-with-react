import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SingleBlogPost from './pages/SingleBlogPost';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => (
  <Routes>
    {/* <Route path="/" element={<HomePage />} /> */}
    <Route path="/" element={<Home />} />
    <Route path="/blog/:id" element={<SingleBlogPost />} />
  </Routes>
);

export default App;

