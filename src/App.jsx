import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServicesSection from './components/ServicesSection';
import Header from './components/Header';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <main className="pt-16"> {/* Add padding to account for fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/services" element={<ServicesSection />} />
          {/* Add a catch-all route for 404 pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

// Add this simple NotFound component at the bottom of App.jsx
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
        <p className="text-gray-400 mb-6">
          Sorry, the page you're looking for doesn't exist or may have been moved. Please check the URL or return to the homepage.
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