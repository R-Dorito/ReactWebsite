import styled from "styled-components";

export const DrawCircle = styled.div`
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

export const CircleBody = styled.div`
  display: block; //why it not appear in new line?????
  width: 100%;
  float: left;
`;
