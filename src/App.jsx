import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CursorFollower from './components/CursorFollower';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import BlogPost from './pages/BlogPost';
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <CursorFollower />
      <ScrollToTop />
      <div className="site-frame relative flex min-h-screen flex-col overflow-x-hidden font-sans text-pearl selection:bg-amber-300/25 selection:text-white">
        <Navbar />
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
