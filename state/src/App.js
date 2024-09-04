import { useState, useEffect } from "react";
import "./output.css";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const handleOnClick = () => {
    setCount(count + 1);
  }

  return (
    <div className="flex items-center justify-center flex-col mt-10">
      <p className="text-3xl">You clicked {count} times</p>
      <button onClick={handleOnClick}
        className="text-white bg-gradient-to-r from-cyan-500 via-black-600 to-teal-700 hover:bg-gradient-to-br  focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-white-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3">
        Click me
      </button>
    </div>
  );
}

export default App;
