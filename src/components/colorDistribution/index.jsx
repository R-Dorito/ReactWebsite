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
    var rgbColors = [];
    var rgbArray = [];

    for (var i = 0; i < 255; i++) {
      for (var j = 0; j < 3; j++) {
        rgbColors[j] = Math.round(Math.random() * 255 + 1);
      }
      rgbArray.push(rgbColors);
      rgbColors = [];
      console.log(rgbArray);
    }
    return rgbArray;
  }

  createListOfCircles() {
    //going to break up the string here
  }

  render() {
    //var rgbColors = this.createListOfCircles();

    // <SmallCircleBody>
    //     <SmallCircleSet columnCount={7}>
    //       {rgbColors.map((color) => (
    //         <DrawSmallCircle colorCircle={color} />
    //       ))}
    //       {this.generateRgb()}
    //     </SmallCircleSet>
    //     <GraphMaker colorData={rgbColors} />
    //   </SmallCircleBody>
    return (
      <SmallCircleBody>
        <div>{this.generateRgb()}</div>
      </SmallCircleBody>
    );
  }
}
