


import React, { useState, useEffect } from 'react';
import './singleBlogPost.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { fetchEntries } from '../contentfulClient';
import { useParams } from 'react-router-dom';

const SingleBlogPost = () => {
    const { blogId }= useParams()
    const [isLoading, setIsLoading] = useState(true)
    console.log(blogId)
    const [post, setPost] = useState(null)
//   if (!post) {
//     return <div className="blog-container">Loading...</div>;
//   }

//   const { title, image, content } = post;

    useEffect(()=> {
        const fetchPost = async () => {
            const entries = await fetchEntries('blogPost');
            console.log("Fetched entries:", entries); // Debugging log
            // setPost(entries)
            console.log(entries)
            const foundPost = entries.find((post) => post.sys.id === blogId)
            setPost(foundPost)
            setIsLoading(false)
            console.log(foundPost)
            // const foundPost = entries?.find((entry) => entry.slug === slug);
            // console.log("Found post:", foundPost); // Debugging log
            // setPost(foundPost);
        };
        fetchPost()
    }, [blogId])

  return (
    <div>
        <HelmetProvider>
            <Helmet>
                <title>{`${post?.fields.title}`}</title>
                <meta name="description" content={post?.fields.content} />
            </Helmet>
        </HelmetProvider>
        <Navbar />
        {/* this is single blog component */}
        {isLoading ? 
            <div style={{height: "92vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div class="spinner-border" role="status">
                </div>
            </div>
        : 
            <div className="blog-container">
            <div className="blog-header">
                <h1>{post?.fields.title}</h1>
            </div>
            <img src={post?.image.file.url} className="blog-image" />
            <div className="blog-content">
                <p>{post?.fields.content}</p>
            </div>
            </div>
        }
        <Footer />
    </div>
  );
};

export default SingleBlogPost;
