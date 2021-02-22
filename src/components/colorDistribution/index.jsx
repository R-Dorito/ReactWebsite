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
import { GraphMaker } from "./graphMaker";

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
    return `rgb(${Math.round(Math.random() * 255 + 1)}, ${Math.round(
      Math.random() * 255 + 1
    )}, ${Math.round(Math.random() * 255 + 1)})`;
  }

  render() {
    const rgbColors = [];

    for (var n = 0; n < 256; n++) {
      rgbColors.push(this.generateRgb());
    }
    return (
      <SmallCircleBody>
        <SmallCircleSet columnCount={7}>
          {rgbColors.map((color) => (
            <DrawSmallCircle colorCircle={color} />
          ))}
        </SmallCircleSet>
        <GraphMaker />
      </SmallCircleBody>
    );
  }
}
