import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Footer from './components/Footer';
import AnalyticsProvider from './components/AnalyticsProvider';

export default function App() {
  return (
    <Router basename="/">
      <AnalyticsProvider measurementID={import.meta.env.VITE_GA_MEASUREMENT_ID}>
        <Header />
        <main className="pt-16"> {/* Existing padding for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </AnalyticsProvider>
    </Router>
  );
}