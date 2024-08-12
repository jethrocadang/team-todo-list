import { useState, useEffect } from 'react';

const useMediaQuery = (query: string): boolean => {
  // Initialize state to false since window is not defined during SSR
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Check if window is available (i.e., running in the browser)
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query);
      setMatches(mediaQueryList.matches);

      // Define callback to update state
      const handleChange = (event: MediaQueryListEvent) => setMatches(event.matches);

      // Add event listener
      mediaQueryList.addEventListener('change', handleChange);

      // Clean up event listener on unmount
      return () => {
        mediaQueryList.removeEventListener('change', handleChange);
      };
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;
