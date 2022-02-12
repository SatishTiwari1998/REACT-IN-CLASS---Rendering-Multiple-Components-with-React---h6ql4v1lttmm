
import React from "react";
import '../styles/App.css';

class App extends React.Component{
  render(){
    return(
      <>
       <h1 data-ns-test="project-name">My Project</h1>
      <h2 data-ns-test="project-description">Its a secret</h2>
      </>
    );
  }
}

export default App;
