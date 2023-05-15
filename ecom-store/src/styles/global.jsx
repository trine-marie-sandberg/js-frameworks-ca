import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --color-primary: rgb(36, 43, 42);
    --color-secondary: rgb(182, 255, 175);
    --color-tertiary: blue;
    --color-font: white;
    --color-warning-red: red;
    --color-contrast-light: rgb(40, 49, 48);
    --color-contrast-dark: rgb(31, 37, 37);
    --color-black: rgb(11, 19, 10);

    --sizes-xs: 5px;
    --sizes-sm: 1rem;
    --sizes-med: 1.5rem;
    --sizes-lg: 2rem;
    --sizes-xl: 3rem;
  }
  body {
    all: unset;
    display: block;
  }
`;

export default GlobalStyle;