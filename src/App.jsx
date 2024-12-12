import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => (
  <Routes>
    {/* <Route path="/" element={<HomePage />} /> */}
    <Route path="/" element={<Home />} />
    {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
  </Routes>
);

export default App;

