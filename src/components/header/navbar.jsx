import React from "react";
import { styled } from "styled-components";
import { Nav, Ul, Li, I } from "./style";
import { NavLink } from "react-router-dom";
import { CartIcon } from "./cart";

const Button = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
`;

export function NavBar() {
    return(
        <Nav>
            <Ul>
                <Li>
                    <NavLink to="/" aria-label="Home">
                        <I className="fa-solid fa-house"></I>
                    </NavLink>
                </Li>
                <Li>
                    <CartIcon/>
                </Li>
                <Li>
                    <NavLink to="contact" aria-label="Contact">
                       <I className="fa-solid fa-phone"></I>
                    </NavLink>
                </Li>
            </Ul>
        </Nav>
    )
}