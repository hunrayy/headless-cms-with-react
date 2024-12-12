import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEntries } from '../contentfulClient';
import { Helmet } from 'react-helmet';

import "./blog.css";
const Blog = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPost = async () => {
      const entries = await fetchEntries('blogPost');
      console.log("Fetched entries:", entries); // Debugging log
      setPosts(entries)
      console.log(posts)
      // const foundPost = entries?.find((entry) => entry.slug === slug);
      // console.log("Found post:", foundPost); // Debugging log
      // setPost(foundPost);
    };
  
    fetchPost();
  }, [slug]);
  

  if (!posts) return <p>Loading...</p>;

  return (
    <div>
      <Helmet>
        
        
      </Helmet>
      <div className="blog-container">
      <header className="blog-header">
        <h1>Tech Chronicles</h1>
        <p>Exploring innovation, trends, and insights in technology</p>
      </header>

        <main className="blog-main">
          {posts?.map((blog, index) => {
            console.log(blog)
            return <div className="blog-card" key={index}>
              <img src={blog?.image.file.url} alt={blog?.fields.title} className="blog-image" />
              <div className="blog-content">
                <h2>{blog?.fields.title}</h2>
                <p className="blog-meta">
                  Category | {blog?.category}
                </p>
                <p className="blog-excerpt">{blog?.fields.category}</p>
                <button className="read-more">Read More</button>
              </div>
            </div>
          })}
        </main>
      </div>

    </div>
  );
};

export default Blog;
