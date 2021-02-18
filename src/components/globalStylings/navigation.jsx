import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  float: left;
  margin-right: 10px;
  background-color: #b8f2e6;
  border-style: hidden solid hidden hidden;
  height: 100vh;
  width: 200px;
`;

export const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0px;
`;

export const StyledListItem = styled.li`
  //padding: 6px;
  position: relative;
  display: flex;
  flex-grow: 1;
  margin: 2px 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font: 15px Verdana, sans-serif;
  color: ${(props) => (props.isActive ? "#ffffff" : "#000")};

  display: flex;
  flex-grow: 1;

  padding: 5px 0 5px 10px;
  border-color: ${(props) => (props.isActive ? "#000000" : "rgba(0,0,0,0)")};
  border-style: solid hidden;
  background-color: ${(props) =>
    props.isActive ? "#5E6472" : "rgba(0,0,0,0)"};

  transition: background-color 0.2s linear, border-color 0.2s linear,
    color 0.2s linear;

  &:hover {
    //color: #FFA69E;
    text-decoration: underline;
  }
`;
