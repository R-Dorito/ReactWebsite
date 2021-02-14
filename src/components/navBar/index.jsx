import React from 'react';
import styled from 'styled-components'
import { Link, withRouter } from "react-router-dom";
  

const StyledNav = styled.nav`
  padding: 1px;
  background-color: rgb(245,245,245);
`;


const StyledNavList = styled.ul`
  display: flex;
  flex-direction: row;  
  list-style-type: none;
`;

const StyledListItem = styled.li`
  padding: 6px;
  background-color: ${ props => props.isActive ? "#DD6E42" : "#C0D6DF" };
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }  
`;

const StyledLink = styled(Link)`
  color: #404040;
  text-decoration: none;
  &:visited {
    text-decoration: none;
  }
`;


const NavBarComponent = (props) => {
    const { pathname } = props.location;
    console.log(pathname === "/game")
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
    )
  }
  
  export const NavBar = withRouter(NavBarComponent);