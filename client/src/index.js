import React from "react";
import Main from "./Main";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./resources/styles/__main.scss";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
