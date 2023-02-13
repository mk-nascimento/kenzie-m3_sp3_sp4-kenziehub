import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  :root {
    --primary: #FF577F;
    --primary-focus: #FF427F;
    --primary-negative: #59323F;
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --sucess: #3FE864;
    --negative: #E83F5B;
    --radius-1: 4px;
    --radius-2: 8px;
  }

  body {
    background-color: var(--grey-4);
    color: var(--grey-0);
  }

  main {
    max-width: 100%;
    padding-bottom: 48px;
  }

  label {
    font-weight: 400;
    font-size: calc(12rem / 16);
    user-select: none;
  }
`;
export default Global;
