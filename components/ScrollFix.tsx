'use client';

import { useEffect } from 'react';

export default function ScrollFix() {
  useEffect(() => {
    // Check if there's a hash in the URL on initial load
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to allow rendering and hydration to finish
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);
  
  return null;
}
