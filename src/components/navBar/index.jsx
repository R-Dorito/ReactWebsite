import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const StyledNav = styled.nav`
  float: left;
  margin-right: 10px;
  background-color: #b8f2e6;
  border-style: hidden solid hidden hidden;
  height: 100vh;
  width: 200px;
`;

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0px;
`;

const StyledListItem = styled.li`
  //padding: 6px;
  position: relative;
  display: flex;
  flex-grow: 1;
  margin: 2px 0;
`;

const StyledLink = styled(Link)`
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

const NavBarComponent = (props) => {
  const { pathname } = props.location;

  return (
    <StyledNav>
      <StyledNavList>
        <StyledListItem isActive={pathname === "/"}>
          <StyledLink to="/" isActive={pathname === "/"}>
            Home
          </StyledLink>
        </StyledListItem>
        <StyledListItem isActive={pathname === "/game"}>
          <StyledLink to="/game" isActive={pathname === "/game"}>
            Game
          </StyledLink>
        </StyledListItem>
        <StyledListItem isActive={pathname === "/multiplication"}>
          <StyledLink
            to="/multiplication"
            isActive={pathname === "/multiplication"}
          >
            Multiplication Tables
          </StyledLink>
        </StyledListItem>
      </StyledNavList>
    </StyledNav>
  );
};

export const NavBar = withRouter(NavBarComponent);
