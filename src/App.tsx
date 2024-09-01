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
import {useWindowSize} from './utils/useWindowSize'
import { useState } from 'react';

function App() {
  const windowSize = useWindowSize();
  const isSmallScreen = windowSize.width <= 768;
  const [ showForm, setShowFrom ] = useState(false)
  return (
    <>
    <button className='fixed bottom-10 right-10 bg-red-600 p-5 text-white rounded-md ' onClick={() =>setShowFrom(!showForm)}>Submit A Blog</button>
    {showForm && <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex justify-center items-center">
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button onClick={() =>setShowFrom(!showForm)} type="submit">Submit</button>
      </form>
      </div>}
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
        </span>
        <span className="md:pl-[150px] sm:mt-10 md:mt-2 ">
          <About />
          <Archives />
          <Sources />
        </span>
      </div>
    </>
  );
}

export default App;
