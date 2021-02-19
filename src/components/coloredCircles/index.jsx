import React from "react";
import {
  GlobalHeader,
  GlobalParagraph,
  GlobalSubHeader,
} from "../globalStylings/global-text-styling";
import { GlobalDivSeperator } from "../globalStylings/global-div-styling";
import { DrawCircle, ColorReturn } from "./circle-styling";

// used in App.js
export const CircleText = (props) => {
  return <GlobalHeader>Here are some colored circles</GlobalHeader>;
};

// used to draw circles
export class Circle extends React.Component {
  resetButton(isPressed) {}

  rgbGenerator() {
    var rgbValues = [];
    for (var i = 0; i < 3; i++) {
      rgbValues.push(Math.round(Math.random() * 255 + 1));
    }

    return rgbValues;
  }

  hslGenerator() {
    var hslValues = [];
    hslValues.push(Math.round(Math.random() * 360 + 1));
    hslValues.push(Math.round(Math.random() * 100 + 1));
    hslValues.push(20);

    return hslValues;
  }

  createCircles(type) {
    var circles = [];
    var colors;
    var i;
    switch (type) {
      case "rgb":
        for (i = 0; i < 5; i++) {
          var rgbValue = this.rgbGenerator();
          colors =
            "rgb(" + rgbValue[0] + "," + rgbValue[1] + "," + rgbValue[2] + ")";
          circles.push(
            <DrawCircle colorCircle={colors}>
              <ColorReturn>{colors}</ColorReturn>
            </DrawCircle>
          );
        }
        return circles;

      case "hsl":
        var hslValue = this.hslGenerator();

        for (i = 0; i < 5; i++) {
          colors =
            "hsl(" +
            hslValue[0] +
            "," +
            hslValue[1] +
            "%," +
            hslValue[2] +
            "%)";
          circles.push(
            <DrawCircle colorCircle={colors}>
              <ColorReturn>{colors}</ColorReturn>
            </DrawCircle>
          );
          hslValue[2] = hslValue[2] + 15;
        }

        return circles;

      default:
        circles.push(<DrawCircle colorCircle={"#000"} />);
    }
  }

  render() {
    var rgbCircles = [];
    var hslCircles = [];

    var i;
    for (i = 0; i < 3; i++) {
      rgbCircles.push(<div>{this.createCircles("rgb")}</div>);
    }
    for (i = 0; i < 3; i++) {
      hslCircles.push(<div>{this.createCircles("hsl")}</div>);
    }

    return (
      <>
        <GlobalSubHeader>Random circles</GlobalSubHeader>
        <GlobalDivSeperator>
          <GlobalParagraph>(Below) These are made using RGB</GlobalParagraph>
          {rgbCircles}
        </GlobalDivSeperator>
        <GlobalDivSeperator>
          <GlobalParagraph>(Below) These are made using HSL</GlobalParagraph>
          {hslCircles}
        </GlobalDivSeperator>
      </>
    );
  }
}
