import React from "react";
import {
  GlobalHeader,
  GlobalSubHeader,
  GlobalParagraph,
} from "../globalStylings/global-text-styling";
import { BigCircleSetWrapper } from "../coloredCircles/circle-styling.jsx";
import { SmallCircleBody, DrawSmallCircle } from "./color-dist-styling";

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
    var yellowArray = [];
    var purpleArray = [];
    var other = [];

    for (var i = 0; i < 255; i++) {
      rgbColors = this.generateRgb();

      // let color = rgbColors.indexOf(
      //   Math.max(rgbColors[0], rgbColors[1], rgbColors[2])
      // );
      // if (color === 0) redArray.push(rgbColors);
      // else if (color === 1) greenArray.push(rgbColors);
      // else if (color === 2) blueArray.push(rgbColors);

      if (rgbColors[0] > rgbColors[1] && rgbColors[0] > rgbColors[2]) {
        let getAve = (rgbColors[0] + rgbColors[2]) / 2;
        if (rgbColors[1] >= getAve) {
          yellowArray.push(rgbColors);
        } else redArray.push(rgbColors);
      } else if (rgbColors[1] > rgbColors[0] && rgbColors[1] > rgbColors[2]) {
        greenArray.push(rgbColors);
      } else if (rgbColors[2] > rgbColors[1]) {
        if (rgbColors[1] > rgbColors[0]) blueArray.push(rgbColors);
        else if (rgbColors[0] > rgbColors[1]) purpleArray.push(rgbColors);
      }

      rgbColors = [];
    }
    return (
      <BigCircleSetWrapper>
        <SmallCircleBody>
          <GlobalParagraph>Red Colors:</GlobalParagraph>
          {redArray.map((color) => {
            return (
              <DrawSmallCircle
                colorCircle={
                  "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")"
                }
              ></DrawSmallCircle>
            );
          })}
        </SmallCircleBody>

        <SmallCircleBody>
          <GlobalParagraph>Yellow Colors:</GlobalParagraph>
          {yellowArray.map((color) => {
            return (
              <DrawSmallCircle
                colorCircle={
                  "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")"
                }
              ></DrawSmallCircle>
            );
          })}
        </SmallCircleBody>

        <SmallCircleBody>
          <GlobalParagraph>Green Colors:</GlobalParagraph>
          {greenArray.map((color) => {
            return (
              <DrawSmallCircle
                colorCircle={
                  "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")"
                }
              ></DrawSmallCircle>
            );
          })}
        </SmallCircleBody>

        <SmallCircleBody>
          <GlobalParagraph>Blue Colors:</GlobalParagraph>
          {blueArray.map((color) => {
            return (
              <DrawSmallCircle
                colorCircle={
                  "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")"
                }
              ></DrawSmallCircle>
            );
          })}
        </SmallCircleBody>

        <SmallCircleBody>
          <GlobalParagraph>Purple Colors:</GlobalParagraph>
          {purpleArray.map((color) => {
            return (
              <DrawSmallCircle
                colorCircle={
                  "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")"
                }
              ></DrawSmallCircle>
            );
          })}
        </SmallCircleBody>
      </BigCircleSetWrapper>
    );
  }
}
