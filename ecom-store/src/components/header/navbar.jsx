import React from "react";
import { styled } from "styled-components";
import { Nav, Ul, Li, I } from "./style";
import { NavLink } from "react-router-dom";

const Button = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
`;

//ROUTES
const route1 = "home";
const route2 = "page2";

export function NavBar() {
    return(
        <Nav>
            <Ul>
                <Li>
                    <NavLink to={route1}>Home</NavLink>
                </Li>
                <Li>
                    <NavLink to={route2}>Page 2</NavLink>
                </Li>
            </Ul>
            <Button>Login</Button>
        </Nav>
    )
}