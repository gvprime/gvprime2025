import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}