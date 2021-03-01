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
    return rgbArray;
  }

  createListOfCircles() {}

  render() {
    var colors;
    let colorsList = [];
    var redArray = [];
    var blueArray = [];
    var greenArray = [];
    var yellowArray = [];
    var purpleArray = [];

    for (var i = 0; i < 255; i++) {
      // let color = rgbColors.indexOf(
      //   Math.max(rgbColors[0], rgbColors[1], rgbColors[2])
      // );
      // if (color === 0) redArray.push(rgbColors);
      // else if (color === 1) greenArray.push(rgbColors);
      // else if (color === 2) blueArray.push(rgbColors);

      colors = this.generateRgb();
      let c1 = colors[0];
      let c2 = colors[1];
      let c3 = colors[3];

      colorsList = colors.map((colors, i) => (
        <div>
          {colors}
          <DrawSmallCircle
            key={i}
            colorCircle={"rgb(" + colors + "," + colors + "," + colors + ")"}
          />
        </div>
      ));
      console.log(colorsList);

      if (colors[0] > colors[1] && colors[0] > colors[2]) {
        let getAve = (colors[0] + colors[2]) / 2;
        if (colors[1] >= getAve) {
          yellowArray.push(colors);
        } else redArray.push(colors);
      } else if (colors[1] > colors[0] && colors[1] > colors[2]) {
        greenArray.push(colors);
      } else if (colors[2] > colors[1]) {
        if (colors[1] > colors[0]) blueArray.push(colors);
        else if (colors[0] > colors[1]) purpleArray.push(colors);
      }
    }
    return (
      <BigCircleSetWrapper>
        <div>
          <GlobalParagraph>
            Here is a random selection of colors
          </GlobalParagraph>
          <div>{colorsList}</div>
        </div>
        <SmallCircleBody>
          <GlobalParagraph>
            There are {redArray.length} Red Colors:
          </GlobalParagraph>
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
          <GlobalParagraph>
            There are {yellowArray.length} Yellow Colors:
          </GlobalParagraph>
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
          <GlobalParagraph>
            There are {greenArray.length} Green Colors:
          </GlobalParagraph>
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
          <GlobalParagraph>
            There are {blueArray.length} Blue Colors:
          </GlobalParagraph>
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
          <GlobalParagraph>
            There are {purpleArray.length} Purple Colors:
          </GlobalParagraph>
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
