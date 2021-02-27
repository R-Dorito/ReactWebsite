import styled from "styled-components";
import { DrawCircle, CircleSet } from "../coloredCircles/circle-styling";

//This is the div that holds all the circles
export const SmallCircleBody = styled.div`
  display: inline-grid;
  justify-items: left;
  grid-template-columns: 250px 500px;
  min-height: 500px;
`;

// Draw the circles
export const DrawSmallCircle = styled(DrawCircle)`
  width: 10px;
  height: 10px;
`;

export const SmallCircleSet = styled(CircleSet)`
  grid-gap: 10px;
  grid-template-columns: repeat(10, 10px);
`;

export const GraphBody = styled.div`
  position: relative;
  width: 500px;
  height: inherit;
  background-color: #dbdbdb;
  grid-column: 2/2;
  grid-row: 1;
`;
