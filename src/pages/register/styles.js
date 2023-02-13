import styled from "styled-components";
import Container from "/src/styles/container";

const StyledRegister = styled( Container )`
  & > form.form-register {
    gap: 22px;
  }

  & > form.form-register > .form-desc__register {
    font-weight: 400;
    font-size: 9.59437px;
    text-align: center;
  }

  & > form.form-register > div.select-place {
    gap: 18px;
  }

  form.form-register > button {
    &:hover,
    &:focus {
      background-color: var(--primary-focus);
      border-color: var(--primary-focus);
    }
  }

  & > form.form-register > button.disabled {
    background-color: var(--primary-negative);
    border-color: var(--primary-negative);
  }
`;

export const Select = styled.select`
  & {
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
    border-radius: var(--radius-1);
    color: var(--grey-1);
    cursor: pointer;
    font-weight: 400;
    font-size: calc(12rem / 16);
    padding: 10px 12px;
    width: 100%;

    :hover,
    :focus {
      border-color: var(--grey-0);
      color: var(--grey-0);
    }
    outline: none;
  }
`;

export default StyledRegister;
