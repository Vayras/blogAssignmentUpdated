import { useEffect, useState } from 'react';

function AutoUpdateBlogPost() {
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const storedBlogPost = localStorage.getItem('blogPost');
    if (storedBlogPost) {
      setBlogPost(JSON.parse(storedBlogPost));
    }
  }, []);

  return (
    <div className="pt-18">
      {blogPost ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{blogPost.title}</h2>
          <p className="text-gray-700 mb-2">by {blogPost.author}</p>
          <div className="text-gray-900 whitespace-pre-line">{blogPost.content}</div>
        </div>
      ) : (
        <p>No blog post available.</p>
      )}
    </div>
  );
}

export default AutoUpdateBlogPost;
