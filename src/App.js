import React from "react";
//import styled from 'styled-components'

import { Game } from "./Game";
import { NavBar } from "./components/navBar";
import { MathTable } from "./components/mathTable";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/multiplication">
          <MathTable />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
