import { createGlobalStyle, css } from "styled-components";

const defaultText = css`
  font-family: "Inter", sans-serif;
  text-align: center;
  user-select: none;
`;

const Typography = createGlobalStyle`

  .Title1 {
    ${defaultText}
    font-weight: 700;
    font-size: calc(16rem/16);
  }

  .Title2 {
    ${defaultText}
    font-weight: 700;
    font-size: calc(16rem/16);
  }

  .Title3 {
    ${defaultText}
    font-weight: 700;
    font-size: calc(16rem/16);
  }

  .Headline {
    ${defaultText}
    font-weight: 400;
    font-size: calc(12rem/16);
  }

  .HeadlineBold {
    ${defaultText}
    font-weight: 700;
    font-size: calc(12rem/16);
  }

  .HeadlineItalic {
    ${defaultText}
    font-weight: 400;
    font-style: italic;
    font-size: calc(12rem/16);
  }

`;
export default Typography;
