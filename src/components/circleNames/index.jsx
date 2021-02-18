import React from "react";
import { GlobalHeader, GlobalSubHeader } from "../globalStylings/headers";
import { DrawCircle, CircleBody } from "./circle-styling";

// used in App.js
export const CircleText = (props) => {
  return <GlobalHeader>Draw a circle</GlobalHeader>;
};

// used to draw circles
export class Circle extends React.Component {
  resetButton(isPressed) {}

  rgbGenerator() {
    var num1 = Math.random() * 255 + 1;
    var num2 = Math.random() * 255 + 1;
    var num3 = Math.random() * 255 + 1;
    return "rgb(" + num1 + "," + num2 + "," + num3 + ")";
  }

  hslGenerator() {
    var num1 = Math.random() * 360 + 1;
    var num2 = Math.random() * 100 + 1;
    var num3 = Math.random() * 100 + 1;
    return "hsl(" + num1 + "," + num2 + "%," + num3 + "%)";
  }

  getColorValue(type) {}

  render() {
    var rgbValue = this.rgbGenerator();
    var hslValue = this.hslGenerator();

    var circles = [];
    for (var i = 0; i <= 5; i++) {
      circles.push(<DrawCircle colorCircle={rgbValue} />);
    }
    return (
      <>
        <GlobalSubHeader>Random circles</GlobalSubHeader>

        <DrawCircle colorCircle={hslValue} />
        <CircleBody>{circles}</CircleBody>
      </>
    );
  }
}
