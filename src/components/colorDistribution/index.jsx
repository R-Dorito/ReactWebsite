import React from "react";
import {
  GlobalHeader,
  GlobalSubHeader,
} from "../globalStylings/global-text-styling";
import { BigCircleSetWrapper } from "../coloredCircles/circle-styling.jsx";
import {
  SmallCircleBody,
  DrawSmallCircle,
  SmallCircleSet,
} from "./color-dist-styling";
import { GraphMaker, collectData } from "./graphMaker";
export const ColorCircleText = () => {
  return (
    <>
      <GlobalHeader>Circle color distribution</GlobalHeader>
      <GlobalSubHeader>255 Random circles</GlobalSubHeader>
    </>
  );
};

export class ColorDistribution extends React.Component {
  generateRgb() {
    let rgbArray = [];
    for (var j = 0; j < 3; j++) {
      rgbArray[j] = Math.round(Math.random() * 255 + 1);
    }
    console.log(rgbArray);
    return rgbArray;
  }

  createListOfCircles() {
    //Collection of colors
  }

  render() {
    var rgbColors;
    var redArray = [];
    var blueArray = [];
    var greenArray = [];
    var other = [];

    for (var i = 0; i < 255; i++) {
      rgbColors = this.generateRgb();

      // let color = rgbColors.indexOf(
      //   Math.max(rgbColors[0], rgbColors[1], rgbColors[2])
      // );
      // if (color === 0) redArray.push(rgbColors);
      // else if (color === 1) blueArray.push(rgbColors);
      // else if (color === 2) greenArray.push(rgbColors);

      if (rgbColors[0] > rgbColors[1] && rgbColors[0] > rgbColors[2])
        redArray.push(rgbColors);
      else if (rgbColors[1] > rgbColors[0] && rgbColors[1] > rgbColors[2])
        greenArray.push(rgbColors);
      else if (rgbColors[2] > rgbColors[1] && rgbColors[2] > rgbColors[0])
        blueArray.push(rgbColors);
      else other.push(rgbColors);

      rgbColors = [];
    }
    return (
      <div>
        <div>
          <div>Red Colors:</div>
          {redArray.map((color) => {
            return (
              <DrawSmallCircle
                colorCircle={
                  "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")"
                }
              ></DrawSmallCircle>
            );
          })}
        </div>
        <div>
          <div>Blue Colors:</div>
          {blueArray.map((color) => {
            return (
              <DrawSmallCircle
                colorCircle={
                  "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")"
                }
              ></DrawSmallCircle>
            );
          })}
        </div>
        <div>
          <div>Green Colors:</div>
          {greenArray.map((color) => {
            return (
              <DrawSmallCircle
                colorCircle={
                  "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")"
                }
              ></DrawSmallCircle>
            );
          })}
        </div>
        <div>
          <div>Other Colors:</div>
          {other.map((color) => {
            return (
              <DrawSmallCircle
                colorCircle={
                  "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")"
                }
              ></DrawSmallCircle>
            );
          })}
        </div>
      </div>
    );
  }
}
