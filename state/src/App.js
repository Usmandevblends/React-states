import React, { useEffect, useState } from "react";
import "./style.css";
import "./output.css";

function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
    setCalculation(count + 2)
  }, [count])
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

export default App;
