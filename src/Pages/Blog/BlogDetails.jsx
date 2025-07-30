import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loader from '../../Loader/Loader';

const BlogDetails = () => {
      const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch('/Blog.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(b => b.id === parseInt(id));
        setBlog(found);
      });
  }, [id]);
   if (!blog) return <Loader></Loader>
    return (
          <div className="max-w-4xl mx-auto px-4 py-8">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-6 rounded" />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 leading-relaxed">{blog.content}</p>
    </div>
    );
};

export default BlogDetails;