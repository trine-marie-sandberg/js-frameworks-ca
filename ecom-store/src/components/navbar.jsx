import React from "react";
import { styled } from "styled-components";
const Button = styled.button`
  background-color: ${(props) => props.theme.color.primary};
`;
export function NavBar() {
    return(
        <nav>
            <ul>
                <li>Page 1</li>
                <li>Page 2</li>
            </ul>
            <Button>Login</Button>
        </nav>
    )
}