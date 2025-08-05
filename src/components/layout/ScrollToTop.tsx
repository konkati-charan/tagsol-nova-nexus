import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // On route change — scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // On first mount — scroll to top (for page reloads)
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTop;
