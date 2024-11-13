import React from "react";
import "./style.css";
import "./output.css";

class App extends React.Component {

  constructor() {
    super();
    console.warn('constructor called')
  }

  componentDidUpdate() {
    console.warn('componentDidUpdate')
  }
  
  render() {
    console.warn('render called')
    return(
      <>
        <div className=" flex items-center justify-center h-[100px]">
          <h1 className=" text-3xl font-serif">Component Did Update</h1>
        </div>
      </>
    )
  }
}

export default App;
