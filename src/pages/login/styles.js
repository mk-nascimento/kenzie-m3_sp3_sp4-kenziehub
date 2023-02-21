import styled from "styled-components";

const StyledLogin = styled.div`
  border-radius: var(--radius-1);
  height: 100%;
  margin: 0 auto;
  max-width: 100%;
  padding: 0 12px;
  width: 1280px;
  gap: 20px;

  & > main > form.form-login {
    gap: 18px;
    max-width: 100%;
    width: 380px;
  }

  form.form-login > button {
    &:hover,
    &:focus {
      background-color: var(--primary-focus);
      border-color: var(--primary-focus);
    }

    &.disabled {
      background-color: var(--primary-negative);
      border-color: var(--primary-negative);
    }
  }

  form.form-login > a {
    &:hover,
    &:focus {
      background-color: var(--grey-1);
      border-color: var(--grey-1);
    }
  }
`;

export default StyledLogin;
