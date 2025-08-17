import ReactGA from 'react-ga4';

export const initGA = (measurementID) => {
  if (process.env.NODE_ENV === 'production' && measurementID) {
    ReactGA.initialize(measurementID);
  }
};

export const trackPageView = (path) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

export const trackEvent = (category, action, label, value) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.event({
      category,
      action,
      label,
      value
    });
  }
};