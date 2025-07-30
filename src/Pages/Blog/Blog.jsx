import React from 'react';
import { Link } from 'react-router';

const Blog = ({blog}) => {
    return (
       <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600">{blog.excerpt}</p>
        <Link to={`/blog/${blog.id}`} className="text-blue-600 font-medium mt-3 inline-block hover:underline">
          Read More →
        </Link>
      </div>
    </div>
    );
};

export default Blog;