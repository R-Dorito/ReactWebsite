import styled from "styled-components";

export const StyledNavList = styled.ul`
  background-color: #faf3dd;
  // position: absolute;
  margin: 10px 5px 3px 0px;

  padding: 0px 0px 10px 0px;
  border: 2px solid black;
  border-radius: 5px;
  list-style-type: none;
  width: 200px;
  max-width: 200px;
  transition: background-color 0.2s ease-in-out;
  transform: translate(0px, 0px);

  &:hover {
    background-color: #ffdd76;
    box-shadow: 5px 5px 8px #ced5d6;
    transform: translate(-1px, -1px);
    cursor: move;
  }
`;

export const StyledListItem = styled.li`
  padding: 0px 20px 0px 20px;
  font: bold 15px Verdana, sans-serif;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Exit = styled.div`
  display: flex;
  margin: 0px;
  //padding: 10px;
`;
export const Close = styled.h1`
  margin: 0px;
  margin-right: 2px;
  margin-left: auto;
  padding: 2px;
  font: 20px Verdana, sans-serif;
  color: #4f6d7a;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
export const Variable = styled.h1`
  padding: 0px 0px 5px 20px;
  margin: 0px;
`;

export const SmallText = styled.div`
  color: #8a8a8a;
  font-size: 10px;
  padding: 0;
  margin: 0;
`;
