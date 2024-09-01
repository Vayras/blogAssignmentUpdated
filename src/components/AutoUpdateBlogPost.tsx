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
        <div className="bg-white rounded-lg shadow-lg">
          <h2 className="text-5xl ">{blogPost.title}</h2>
          <p className="text-gray-700 mb-5">by {blogPost.author}</p>
          <div className="text-gray-900 whitespace-pre-line">{blogPost.content}</div>
        </div>
      ) : (
        <p>No blog post available.</p>
      )}
    </div>
  );
}

export default AutoUpdateBlogPost;
