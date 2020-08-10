import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import about from "./pages/about";
import projects from "./pages/projects";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={about} />
        <Route exact path="/projects" component={projects} />
      </Switch>
    </Router>
  );
}

export default App;
