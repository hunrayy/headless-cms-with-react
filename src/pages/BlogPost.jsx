import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEntries } from '../contentfulClient';
import { Helmet } from 'react-helmet';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const entries = await fetchEntries('blogPost');
      const foundPost = entries.find((entry) => entry.slug === slug);
      setPost(foundPost);
    };

    fetchPost();
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
        <Helmet>
            <title>{post.title} - My Blog</title>
            <meta name="description" content={post.excerpt} />
        </Helmet>
        <h1>{post.title}</h1>
        <img src={post.image.fields.file.url} alt={post.title} />
        <p>{post.content}</p>
        <p>hdhdhd</p>
    </div>
  );
};

export default BlogPost;
