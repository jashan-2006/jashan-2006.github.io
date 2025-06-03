'use client'

// Import useState hook from React
import { useState } from 'react'

// Counter component with an optional initialValue prop
export default function Counter({ initialValue = 0 }) {
  // State for the current count
  const [count, setCount] = useState(initialValue);
  // State to track if the limit is reached
  const [isLimitReached, setIsLimitReached] = useState(false);

  // Function to increment the count
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    // Set limit reached if count is 10 or more
    if (newCount >= 10) {
      setIsLimitReached(true);
    }
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
    setIsLimitReached(false);
  };

  // Function to reset the count to initial value
  const reset = () => {
    setCount(initialValue);
    setIsLimitReached(false);
  };

  // Render the counter UI
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px',
      margin: '20px 0'
    }}>
      <h2 style={{ marginTop: 0 }}>Counter: {count}</h2>
      {/* Increment button */}
      <button 
        onClick={increment}
        style={{
          marginRight: '10px',
          padding: '8px 16px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Increment
      </button>
      {/* Decrement button */}
      <button 
        onClick={decrement}
        style={{
          marginRight: '10px',
          padding: '8px 16px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Decrement
      </button>
      {/* Reset button */}
      <button 
        onClick={reset}
        style={{
          padding: '8px 16px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Reset
      </button>
      
      {/* Show message if limit is reached */}
      {isLimitReached && (
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          You&apos;ve reached the limit!
        </p>
      )}
    </div>
  );
}