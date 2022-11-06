import React, { useState } from 'react';
import './app.css';

export function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="red">
      {count}
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
}
