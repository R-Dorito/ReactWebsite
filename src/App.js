import React from "react";
import styled from "styled-components";

import { Game } from "./Game";
import { NavBar } from "./components/navBar";
import { MathTable } from "./components/mathTable";
import { Circle, CircleText } from "./components/coloredCircles";
import {
  ColorDistribution,
  ColorCircleText,
} from "./components/colorDistribution";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  GlobalHeader,
  GlobalSubHeader,
  GlobalParagraph,
  GlobalHyperlink,
} from "./components/globalStylings/global-text-styling";

const DivBody = styled.div`
  margin-top: 20px;
  float: left;
  position: absolute;
  display: block;
  left: 230px;
  // This is primarily aimed at websites at the moment and not mobile
  // The Nav bar is 230px
  width: (100%) - 230px;
`;

function App() {
  return (
    <Router>
      <NavBar />
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/home">
          <DivBody>Home text</DivBody>
        </Route>
        <Route path="/game">
          <DivBody>
            <GlobalHeader>Tic Tac Toe</GlobalHeader>
            <GlobalSubHeader>Tutorial: Intro to React</GlobalSubHeader>
            <GlobalParagraph>
              Original from
              <GlobalHyperlink href="https://reactjs.org/tutorial/tutorial.html">
                : https://reactjs.org/tutorial/tutorial.html
              </GlobalHyperlink>
            </GlobalParagraph>
            <Game />
          </DivBody>
        </Route>
        <Route path="/multiplication">
          <DivBody>
            <MathTable />
          </DivBody>
        </Route>
        <Route path="/circleText">
          <DivBody>
            <CircleText />
            <Circle />
          </DivBody>
        </Route>
        <Route path="/colorDis">
          <DivBody>
            <ColorCircleText />
            <ColorDistribution />
          </DivBody>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
