import React, { useEffect, useState } from "react";
import "./style.css";
import "./output.css";
function App() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  useEffect(() => {
    alert("Hey Welcome to my page");
  }, []);

  useEffect(() => {
    alert("Count was changed");
  }, [count]);

  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Count : {count} </h1>
        <h1 className="text-3xl font-bold">Data : {data} </h1>
        <div className="flex gap-2">
          <button
            onClick={() => setCount(count + 1)}
            className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90  focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
          >
            Update count
          </button>
          <button
            onClick={() => setData(data + 1)}
            className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90  focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
          >
            Update data
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
