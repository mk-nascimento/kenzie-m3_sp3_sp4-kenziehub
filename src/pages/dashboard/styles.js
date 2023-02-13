import styled from "styled-components";
import Container from "/src/styles/container";

const StyledMainContainer = styled( Container )`
  gap: 16px;
  padding: 36px 12px;

  .Title1,
  .info {
    text-align: left;
  }
  .info {
    font-weight: 400;
    font-size: calc(16rem / 16);
  }
`;

export default StyledMainContainer;
