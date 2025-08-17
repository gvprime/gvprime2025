import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, trackPageView } from '../utils/analytics';

const AnalyticsProvider = ({ children, measurementID }) => {
  const location = useLocation();

  useEffect(() => {
    initGA(measurementID);
  }, [measurementID]);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return children;
};

export default AnalyticsProvider;