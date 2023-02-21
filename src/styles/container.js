import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;

  &.nav > img {
    width: 122px;
  }

  &.container__form-page {
    max-width: 380px;
    padding: 0 12px;
  }

  &.container__dash-page {
    padding: 0 12px;
  }
`;

export default Container;
