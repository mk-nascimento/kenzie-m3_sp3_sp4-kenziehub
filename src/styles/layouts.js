import { createGlobalStyle } from "styled-components";

export const Layouts = createGlobalStyle`

  .grid {
    display: grid;
  }

  .flex {
    display: flex;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .center {
    align-items: center;
    justify-content: center;
  }

  .j-center {
    justify-items: center;
    justify-content: center;
  }

  .a-center {
    align-items: center;
    align-content: center;
  }

  .j-between {
    justify-content: space-between;
  }

`;
