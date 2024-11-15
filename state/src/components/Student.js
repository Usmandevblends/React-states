import React from "react";

class Student extends React.Component {
  componentWillUnmount() {
    alert('componentWillUnmount called ')
  }
  render() {
    return (
      <>
        <h1 className=" text-3xl font-black">Student Component</h1>
      </>
    )
  }
}

export default Student;