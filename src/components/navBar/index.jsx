import React from "react";
import { withRouter } from "react-router-dom";
import {
  StyledNav,
  StyledNavList,
  StyledListItem,
  StyledLink,
} from "../globalStylings/navigation";

const NavBarComponent = (props) => {
  const { pathname } = props.location;

  return (
    <StyledNav>
      <StyledNavList>
        <StyledListItem isActive={pathname === "/home"}>
          <StyledLink to="/home" isActive={pathname === "/home"}>
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
        <StyledListItem isActive={pathname === "/circleText"}>
          <StyledLink to="/circleText" isActive={pathname === "/circleText"}>
            Circle Text Maker
          </StyledLink>
        </StyledListItem>
      </StyledNavList>
    </StyledNav>
  );
};

export const NavBar = withRouter(NavBarComponent);
