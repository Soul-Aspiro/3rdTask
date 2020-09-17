import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Card from "./Components/card";
import Resume from "./Components/resume";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowseRouter>
        <Route exact path="/" component={Card} />
        <Route exact path="/Resume" component={Resume} />
      </BrowseRouter>
    </div>
  );
}

export default App;
