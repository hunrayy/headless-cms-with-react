import React, { useEffect, useState } from 'react';
import { fetchEntries } from '../contentfulClient';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const entries = await fetchEntries('blogPost'); // Replace 'blogPost' with your content type ID
      console.log(entries)
      setPosts(entries);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts?.map((post, index) => (
          <li key={index}>
            <Link to={`/post/${post.slug}`}>{post.name}</Link>
            <p>{post.description}</p>
            <img src={post.avatar.file.url} width="200px" alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
