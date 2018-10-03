import * as React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.SFC = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link">Hello World!</a>
      </header>
    </div>
  );
};

export default App;
