import React from "react";
import styled from "styled-components";
import { GlobalHeader, GlobalSubHeader } from "../globalStylings";

const CircleDiv = styled.div`
  margin-top: 10px;
  //border: 5px solid #000000;
  background-color: ${(props) => props.colorCircle || "white"};
  border-radius: 100%;
  width: 100px;
  height: 100px;
`;

export class Circle extends React.Component {
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

  render() {
    var rgbValue = this.rgbGenerator();
    var hslValue = this.hslGenerator();

    return (
      <>
        <GlobalSubHeader>Random circles</GlobalSubHeader>
        <CircleDiv colorCircle={rgbValue} />
        <CircleDiv colorCircle={hslValue} />
      </>
    );
  }
}

export const CircleText = (props) => {
  return <GlobalHeader>Draw a circle</GlobalHeader>;
};
