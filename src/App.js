import React from "react";
//import styled from 'styled-components'

import { Game } from "./Game";
import { ToDo } from "./Game/ToDo";
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
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/users">
          <MathTable />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
