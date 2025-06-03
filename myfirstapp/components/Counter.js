'use client'

import { useState } from 'react'

export default function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  const [isLimitReached, setIsLimitReached] = useState(false);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount >= 10) {
      setIsLimitReached(true);
    }
  };

  const decrement = () => {
    setCount(count - 1);
    setIsLimitReached(false);
  };

  const reset = () => {
    setCount(initialValue);
    setIsLimitReached(false);
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px',
      margin: '20px 0'
    }}>
      <h2 style={{ marginTop: 0 }}>Counter: {count}</h2>
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
      
      {isLimitReached && (
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          You&apos;ve reached the limit!
        </p>
      )}
    </div>
  );
}