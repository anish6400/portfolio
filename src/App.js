import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import about from "./pages/about";
import contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={about} />
        <Route exact path="/contact" component={contact} />
      </Switch>
    </Router>
  );
}

export default App;
