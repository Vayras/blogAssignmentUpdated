import './App.css';
import Navbar from './components/Navbar';
import Topics from './components/Topics';
import Featured from './components/Featured';
import CardList from './components/CardList';
import About from './components/About';
import Archives from './components/Archives';
import Sources from './components/Sources';
import BlogPost from './components/BlogPost';
import AnotherBlogPost from './components/AnotherBlogPost';
import NewFeature from './components/NewFeature';

function App() {
  return (
    <>
      <Navbar />
      <Topics />
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
