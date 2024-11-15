import React, { useState, useEffect } from 'react';
import "./style.css";
import "./output.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    // API call to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.title); // Set the data to the title from the API
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
    
    fetchData(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once when the component mounts

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