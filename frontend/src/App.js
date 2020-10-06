import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  axios.get("http://localhost:3000/api/test").then((res) => {
    console.log(res);
  });

  return (
    <div className="App">
      <header className="App-header">Hello world!</header>
    </div>
  );
}

export default App;
