import React from "react";
import { styled } from "styled-components";
import { Nav, Ul, Li, I, HoverText } from "./style";
import { NavLink } from "react-router-dom";
import { CartIcon } from "./carticon";

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
                        <HoverText>Store/Home</HoverText>
                    </NavLink>
                </Li>
                <Li>
                    <div>
                        <CartIcon/>
                        <HoverText>Cart/Checkout</HoverText>
                    </div>
                </Li>
                <Li>
                    <NavLink to="contact" aria-label="Contact">
                       <I className="fa-solid fa-phone"></I>
                       <HoverText>Contact</HoverText>
                    </NavLink>
                </Li>
            </Ul>
        </Nav>
    )
}