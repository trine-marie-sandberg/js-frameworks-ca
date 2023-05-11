import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    --color-primary: yellow;
    --color-secondary: red;
  }
  body {
    height: 100%;
  }
  main {
    margin: 1rem;
  }
`;

export default GlobalStyle;