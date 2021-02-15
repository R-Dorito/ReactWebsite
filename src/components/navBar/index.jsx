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
  display: block;
  flex-direction: row;
  list-style-type: none;
  padding-left: 0px;
`;

const StyledListItem = styled.li`
  //padding: 6px;
  position: relative;
  display: block;
  padding: 5px 0 5px 10px;
  border-color: black;
  border-style: ${(props) => (props.isActive ? "solid hidden" : null)};
  background-color: ${(props) => (props.isActive ? "#5E6472" : null)};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font: 15px Verdana, sans-serif;
  color: ${(props) => (props.isOn ? "#ffffff" : "#000")};

  &:hover {
    //color: #FFA69E;
    text-decoration: underline;
    transition: background-color 0.2s linear;
  }
`;

const NavBarComponent = (props) => {
  const { pathname } = props.location;

  return (
    <StyledNav>
      <StyledNavList>
        <StyledListItem isActive={pathname === "/"}>
          <StyledLink to="/" isOn={pathname === "/"}>
            Home
          </StyledLink>
        </StyledListItem>
        <StyledListItem isActive={pathname === "/game"}>
          <StyledLink to="/game" isOn={pathname === "/game"}>
            Game
          </StyledLink>
        </StyledListItem>
        <StyledListItem isActive={pathname === "/users"}>
          <StyledLink to="/users" isOn={pathname === "/users"}>
            Users
          </StyledLink>
        </StyledListItem>
      </StyledNavList>
    </StyledNav>
  );
};

export const NavBar = withRouter(NavBarComponent);
