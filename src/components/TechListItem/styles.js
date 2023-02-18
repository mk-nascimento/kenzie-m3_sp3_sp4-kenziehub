import styled from "styled-components";

const StyledListItem = styled.li`
  background-color: var(--grey-4);
  border-radius: var(--radius-1);
  padding: 12px;

  &:focus, &:hover {
    background-color: var(--grey-2);
  }
    & > .tech-list-item__level:focus, & > .tech-list-item__level:hover {
      color: var(--grey-0);
    }
`;

export default StyledListItem;
