import styled from "styled-components";

export const InputContainer = styled.div`
  gap: 18px;

  & > div.input-place {
    border-radius: var(--radius-1);
    color: var(--grey-1);
    position: relative;
    &:hover,
    &:focus {
      color: var(--grey-0);
    }
  }

  div.input-place > button {
    all: unset;
    display: inline-flex;
    position: absolute;
    right: 12px;
    top: calc(100% / 3);
    cursor: pointer;
  }

  input {
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
    border-radius: var(--radius-1);
    color: var(--grey-1);
    font-weight: 400;
    font-size: calc(12rem/16);
    padding: 10px 12px;
    width: 100%;

    ::placeholder{
      color: var(--grey-1);
    }

    &:hover,
    &:focus {
      border-color: var(--grey-0);
      color: var(--grey-0);
    }
    outline: none;
  }
`;
