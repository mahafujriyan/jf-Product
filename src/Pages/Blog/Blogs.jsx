import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
      const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/Blog.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);
    return (
         <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Our Blogs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map(blog => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
    );
};

export default Blogs;