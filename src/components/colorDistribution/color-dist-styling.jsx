import styled from "styled-components";
import { DrawCircle, CircleSet } from "../coloredCircles/circle-styling";

export const SmallCircleBody = styled.div`
  display: inline-grid;
  justify-items: left;
  grid-template-columns: 250px 500px;
  height: 500px;
`;

export const DrawSmallCircle = styled(DrawCircle)`
  width: 10px;
  height: 10px;
`;

export const SmallCircleSet = styled(CircleSet)`
  grid-gap: 5px;
  grid-template-columns: repeat(10, 10px);
`;

export const GraphBody = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background-color: green;
  grid-column: 2/2;
  grid-row: 1;
`;
