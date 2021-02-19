import styled from "styled-components";

export const DrawCircle = styled.div`
  display: block;
  margin: 0 10px 10px 0px;
  //border: 5px solid #000000;
  background-color: ${(props) => props.colorCircle || "white"};
  border-radius: 100%;

  width: 100px;
  height: 100px;

  flex-direction: column;
  //flex-wrap: wrap;
  float: left;

  border: 2px solid rgba(0, 0, 0, 0);
  transition: border-color 0.2s ease-in-out;

  color: rgba(0, 0, 0, 0);
  text-align: center;

  &:hover {
    border: 2px solid rgba(0, 0, 0, 1);
    color: rgba(0, 0, 0, 1);
  }
`;

export const CircleBody = styled.div`
  //display: block;
  border: 10px solid #d1d1d1;
`;

export const ColorReturn = styled.p`
  margin-top: 45%;
  font: 10px Verdana;
`;
