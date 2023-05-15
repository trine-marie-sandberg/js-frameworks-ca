import React from "react";
import { styled } from "styled-components";
import { Nav, Ul, Li, I } from "./style";
import { NavLink } from "react-router-dom";

const Button = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
`;

//ROUTES
const route1 = "home";
const route2 = "cart";

export function NavBar() {
    return(
        <Nav>
            <Ul>
                <Li>
                    <NavLink to={route1}><I className="fa-solid fa-house"></I></NavLink>
                </Li>
                <Li>
                    <NavLink to={route2}><I className="fa-solid fa-cart-shopping"></I></NavLink>
                </Li>
            </Ul>
        </Nav>
    )
}