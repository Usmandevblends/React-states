import React from "react";

function Loops() {
  const students = [
    { name: "Usman", email: "Usman@gmail.com", contact: "03256489741" },
    { name: "Maliaka", email: "Maliaka@gmail.com", contact: "03297962902" },
    { name: "Zeb", email: "Zeb@gmail.com", contact: "03256489741" },
    { name: "Tayyab", email: "Tayyab@gmail.com", contact: "03256489741" },
  ];
  
  return (
    <>
      <div className="min-h-screen flex-col flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-800 relative">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-lg"></div>
        <div className="z-10 w-full max-w-4xl p-4">
            <h1 className="text-3xl font-bold text-white mb-5">Students</h1>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Contact</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {students.map((student, index) => {
                return (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">{index + 1}</td>
                    <td className="py-3 px-6 text-left">{student.name}</td>
                    <td className="py-3 px-6 text-left">{student.email}</td>
                    <td className="py-3 px-6 text-left">{student.contact}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Loops;