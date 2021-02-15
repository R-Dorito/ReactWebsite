import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const StyledNav = styled.nav`
  float: left;
  padding: 1px;
  margin-right: 10px;
  background-color: rgb(245, 245, 245);
  height: 100vh;
  width: 200px;
`;

const StyledNavList = styled.ul`
  display: block;
  flex-direction: row;
  list-style-type: none;
  padding-left: 10px;
`;

const StyledListItem = styled.li`
  //padding: 6px;
  position: relative;
  display: block;
  padding: 0 0 5px 1px;

  //background-color: ${(props) => (props.isActive ? "#DD6E42" : "#C0D6DF")};
`;

const StyledLink = styled(Link)`
  color: #777777;
  text-decoration: none;

  &:hover {
    color: #000000;
    font-weight: bold;
    transition: background-color 0.2s linear;
  }
`;

const NavBarComponent = (props) => {
  const { pathname } = props.location;
  console.log(pathname === "/game");
  return (
    <StyledNav>
      <StyledNavList>
        <StyledListItem isActive={pathname === "/"}>
          <StyledLink to="/">Home</StyledLink>
        </StyledListItem>
        <StyledListItem isActive={pathname === "/game"}>
          <StyledLink to="/game">Game</StyledLink>
        </StyledListItem>
        <StyledListItem isActive={pathname === "/todo"}>
          <StyledLink to="/todo">To Do List</StyledLink>
        </StyledListItem>
        <StyledListItem isActive={pathname === "/users"}>
          <StyledLink to="/users">Users</StyledLink>
        </StyledListItem>
      </StyledNavList>
    </StyledNav>
  );
};

export const NavBar = withRouter(NavBarComponent);
