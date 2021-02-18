import React from "react";
import styled from "styled-components";
import { GlobalHeader, GlobalSubHeader } from "../globalStylings";

const DrawCircle = styled.div`
  margin: 10px 10px 10px 0px;
  //border: 5px solid #000000;
  background-color: ${(props) => props.colorCircle || "white"};
  border-radius: 100%;
  width: 100px;
  height: 100px;
  display: block;
  flex-direction: column;
  //flex-wrap: wrap;
  float: left;
`;

const CircleBody = styled.div`
  display: block; //why it not appear in new line?????
  width: 100%;
  float: left;
`;

export const CircleText = (props) => {
  return <GlobalHeader>Draw a circle</GlobalHeader>;
};

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
