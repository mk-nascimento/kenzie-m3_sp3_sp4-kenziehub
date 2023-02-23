import styled from "styled-components";
import { Button } from "/src/styles/button";
import { GoPlus } from "react-icons/go";

export const PlusButton = styled( Button )`
  padding: 8px;
  width: fit-content;

  &:hover,
  &:focus {
    background-color: var(--grey-2);
  }
`;

export const PlusIcon = styled( GoPlus )`
  fill: var(--white);
`;

export const TechListDiv = styled.div`
  gap: 20px;
`;

export const TechListUl = styled.ul`
  border-radius: var(--radius-1);
  gap: 16px;
  padding: 22px 8px;
`;
