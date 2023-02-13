import { Link as LinkRouter } from "react-router-dom";
import styled, { css } from "styled-components";

const defaultButton = css`
  border-radius: var(--radius-1);
  color: var(--grey-0);
  cursor: pointer;
  font-size: calc(16rem/16);
  font-weight: 500;
  padding: 10px 0;
  text-align: center;
  width: 100%;
`;

const Button = styled.button`
  ${defaultButton}

  border: none;
`;

export const Link = styled( LinkRouter )`
  ${defaultButton}

  text-decoration: none;
`;

export default Button;
