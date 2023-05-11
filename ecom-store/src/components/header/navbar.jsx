import React from "react";
import { styled } from "styled-components";
import { Nav, Ul, Li, I } from "./style";
const Button = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
`;
export function NavBar() {
    return(
        <Nav>
            <Ul>
                <Li>Page 1</Li>
                <Li>Page 2</Li>
            </Ul>
            <Button>Login</Button>
        </Nav>
    )
}