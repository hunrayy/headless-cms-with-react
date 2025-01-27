import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchEntries } from "../contentfulClient";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./blog.css";

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true); // Start loading
      const entries = await fetchEntries("blogPost");
      setPosts(entries);
      setLoading(false); // Stop loading
    };

    fetchPost();
  }, []);

  return (
    <div>
      
      <HelmetProvider>
        <Helmet>
          <title>{posts?.[0]?.fields.title || "Loading..."}</title>
          <meta name="description" content={posts?.[0]?.fields.content || ""} />
        </Helmet>
      </HelmetProvider>
      <div className="blog-container">
      <header className="blog-header">
        {loading ? (
          <>
            <Skeleton height={40} width="60%" />
            <Skeleton height={20} width="80%" />
          </>
        ) : (
          <>
            <h1>Tech Chronicles</h1>
            <p>Exploring innovation, trends, and insights in technology</p>
          </>
        )}
      </header>


        <main className="blog-main">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div className="blog-card skeleton" key={index}>
                  <Skeleton height={200} width="100%" className="blog-image" />
                  <div className="blog-content">
                    <Skeleton height={30} width="80%" />
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={15} width="90%" count={3} />
                  </div>
                </div>
              ))
            : posts?.map((blog, index) => (
                <div className="blog-card" key={index}>
                  <img
                    src={blog?.fields?.image?.fields?.file?.url}
                    alt={blog?.fields.title}
                    className="blog-image"
                  />
                  <div className="blog-content">
                    <h2>{blog?.fields.title}</h2>
                    <p className="blog-meta">Category | {blog?.fields.category}</p>
                    <p className="blog-excerpt">{blog?.fields.excerpt}</p>
                    <button
                      className="read-more"
                      onClick={() => {
                        navigate(`/blog/${blog.sys.id}`);
                      }}
                    >
                      Read More
                    </button>
                    <p>hfhfhf</p>
                  </div>
                </div>
              ))}
        </main>
      </div>
    </div>
  );
};

export default Blog;
