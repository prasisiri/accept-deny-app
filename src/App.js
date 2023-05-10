import React from "react";
import "./App.css";

function App() {
  const handleClick = (response) => {
    if (window.opener) {
      window.opener.postMessage(response, "*");
      window.close();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Accept or Deny</h1>
        <button onClick={() => handleClick("accept")}>Accept</button>
        <button onClick={() => handleClick("deny")}>Deny</button>
      </header>
    </div>
  );
}

export default App;
