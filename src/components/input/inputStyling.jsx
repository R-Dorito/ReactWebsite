import styled from "styled-components";

export const StyledInputBox = styled.input`
  display: flex;
  padding: 10px;
  margin: 0;
  text-align: center;
  font: 25px Verdana, sans-serif;
  color: #4f6d7a;
  border-color: black;
`;
export const StyledInputSubmit = styled.input`
  background-color: #ee9ea1;
  font-weight: bold;
  padding: 10px;
  margin-left: 2.5px;
  border-color: black;
  &:hover {
    background-color: #e56b6f;
  }
`;
export const StyledDivInput = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;
