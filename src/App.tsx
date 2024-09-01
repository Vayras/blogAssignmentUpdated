import './App.css';
import Navbar from './components/Navbar';
import Topics from './components/Topics';
import MobileNav from './components/MobileNav';
import Featured from './components/Featured';
import CardList from './components/CardList';
import About from './components/About';
import Archives from './components/Archives';
import Sources from './components/Sources';
import BlogPost from './components/BlogPost';
import AnotherBlogPost from './components/AnotherBlogPost';
import NewFeature from './components/NewFeature';
import { useWindowSize } from './utils/useWindowSize';
import AutoUpdateBlogPost from './components/AutoUpdateBlogPost';
import { useState } from 'react';

function App() {
  const windowSize = useWindowSize();
  const isSmallScreen = windowSize.width <= 768;
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('blogPost', JSON.stringify(formData));
    setShowForm(false);
  };

  return (
    <>
      <button
        className="fixed bottom-10 right-10 bg-red-600 p-5 text-white rounded-md"
        onClick={() => setShowForm(!showForm)}
      >
        Submit A Blog
      </button>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center">
          <form
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4 w-[80%] max-w-[500px]"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-4">Submit a New Blog Post</h2>
            <input
              className="p-2 border rounded-md"
              type="text"
              name="title"
              placeholder="Blog Title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
            <input
              className="p-2 border rounded-md"
              type="text"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleInputChange}
              required
            />
            <textarea
              className="p-2 border rounded-md h-40"
              name="content"
              placeholder="Content"
              value={formData.content}
              onChange={handleInputChange}
              required
            ></textarea>
            <button
              className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {isSmallScreen ? (
        <MobileNav />
      ) : (
        <div>
          <Navbar />
          <Topics />
        </div>
      )}
      <div className="p-2">
        <Featured />
      </div>
      <CardList />
      <div className="mt-12 container mx-auto flex flex-col md:flex-row p-6 md:p-2">
        <span className="space-y-12">
          <BlogPost />
          <AnotherBlogPost />
          <NewFeature />
          <AutoUpdateBlogPost />
        </span>
        <span className="md:pl-[150px] sm:mt-10 md:mt-2">
          <About />
          <Archives />
          <Sources />
        </span>
      </div>
    </>
  );
}

export default App;
