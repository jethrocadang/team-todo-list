import { useState, useEffect } from 'react';

const useMediaQuery = (query: string): boolean => {
  // Initialize state based on media query
  const [matches, setMatches] = useState<boolean>(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // Define callback to update state
    const handleChange = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Add event listener
    mediaQueryList.addEventListener('change', handleChange);

    // Clean up event listener on unmount
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
