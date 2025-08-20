// src/pages/Blog.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Blog() {
  const location = useLocation();
  
  useEffect(() => {
    // If there's a hash in the URL, redirect to home with the hash
    if (location.hash) {
      window.location.href = `/${location.hash}`;
    }
  }, [location]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-white mb-4">Blog Coming Soon</h1>
        <p className="text-gray-400 mb-6">
          Our blog is currently under development. Check back later for updates!
        </p>
        <a 
          href="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}