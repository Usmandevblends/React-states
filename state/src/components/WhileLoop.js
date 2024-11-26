import React, { useState } from "react";

const WhileLoop = () => {
  const [counter, setCounter] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handleGenerateNumbers = () => {
    let currentCounter = counter;
    let newNumbers = [];

    while (newNumbers.length < 5) {
      currentCounter++;
      newNumbers.push(currentCounter);
    }

    setCounter(currentCounter);
    setNumbers(newNumbers);
    setIsModalOpen(true); // Open modal after generating numbers
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="text-center mt-20">
      <h1>Number Generator</h1>
      <button
        onClick={handleGenerateNumbers}
        className="px-4 py-2 text-lg mb-4 cursor-pointer bg-cyan-700 text-white rounded-lg hover:bg-cyan-800"
      >
        Generate Numbers
      </button>
      <div>
        <h3>Generated Numbers:</h3>
        <ul className="list-none p-0 inline-block text-left">
          {numbers.map((number, index) => (
            <li key={index} className="text-lg">
              {number}
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className=" mx-auto fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-5 w-[500px] rounded shadow-lg">
            <h2 className="text-lg mb-4">Generate numbers</h2>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800"> OK </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhileLoop;