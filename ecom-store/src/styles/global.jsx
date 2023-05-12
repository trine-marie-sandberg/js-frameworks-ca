import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    --color-primary: rgb(36, 43, 42);
    --color-secondary: rgb(182, 255, 175);
    --color-tertiary: blue;
    --color-font: white;
    --color-warning-red;
    --color-dark: rgb(11, 19, 10);

    --sizes
  }
  body {
    height: 100%;
  }
  main {
    margin: 1rem;
  }
  a {
    all: unset;
  }
`;

export default GlobalStyle;