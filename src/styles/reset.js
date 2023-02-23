import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    height: 100vh;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  ul {
    list-style: none;
  }

`;
