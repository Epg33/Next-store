'use client';

import { useEffect } from 'react';

export interface ErrorComponent {
  error: Error; 
  reset: () => void;
}

export default function Error({ error, reset }: ErrorComponent) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}> Try again </button>
    </div>
  );
}