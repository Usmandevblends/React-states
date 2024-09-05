import React, { useEffect, useState } from "react";
import "./style.css";
import "./output.css";

function App() {
  const [num, setNum] = useState(10000);

  useEffect(() => {
    // alert("I am clicked");
  }, [num]);

  const handleOnClick = () => {
    setNum(num + 1);
  };

  return (
    <div className="container `">
      <div className="flex flex-col items-center justify-center mt-10">
        <button
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleOnClick}>
          Click me {num}
        </button>
      </div>
    </div>
  );
}

export default App;
