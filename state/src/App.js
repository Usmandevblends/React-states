import React, { useState, useEffect } from 'react';
import "./style.css";
import "./output.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('Fetched Data');
        }, 1000);
      });
      setData(fetchedData);
    };
  
    fetchData();
  }, [false]); 

  return (
    <>
      <div className='flex items-center justify-center gap-10 flex-col mt-5'>
        <h1 className='text-3xl font-bold'>{data}</h1>
        <button className='bg-lime-500 p-4 rounded-lg' onClick={() => setData('Usman')}>Update Data</button>
      </div>
    </>
  );
}

export default App;