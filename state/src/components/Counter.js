import React, { useState, useEffect } from "react";

function Counter() {
  // State for counter and background color
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("#ffffff");

  // Effect 1: Update document title when count changes
  useEffect(() => {
    document.title = `Count is: ${count}`;
    // Cleanup function (runs before next effect or unmount)
    return () => {
      document.title = "React App";
    };
  }, [count]); // Only re-run when count changes

  // Effect 2: Change background color when count is even/odd
  useEffect(() => {
    const newColor = count % 2 === 0 ? "#f0f9ff" : "#fff1f2";
    setBgColor(newColor);
  }, [count]); // Only re-run when count changes

  // Effect 3: Console log on component mount
  useEffect(() => {
    console.log("Counter component mounted!");
    // Cleanup function
    return () => {
      console.log("Counter component will unmount!");
    };
  }, []); // Empty dependency array = only run once on mount

  return (
    <div 
      className="p-8 rounded-lg shadow-lg max-w-md mx-auto"
      style={{ backgroundColor: bgColor }}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Count: {count}</h2>
        <p className="mb-4 text-gray-600">
          This component demonstrates three useEffect examples:
          <br />
          1. Updating document title
          <br />
          2. Changing background color
          <br />
          3. Console logging mount/unmount
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
