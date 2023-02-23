import styled from "styled-components";

export const StyledNav = styled.nav`
  padding-top: 56px;
  padding-bottom: 36px;

  & button {
    width: unset;
    padding-left: 16px;
    padding-right: 16px;

    &:hover,
    &:focus {
      background-color: var(--grey-1);
      border-color: var(--grey-1);
    }
  }
`;
