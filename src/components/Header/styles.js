import styled from "styled-components";

const StyledHeader = styled.header`
  border-bottom: var(--grey-3) solid 1px;
  border-top: var(--grey-3) solid 1px;


  & > div.container-header {
    .Title1, .HeadlineBold {
      text-align: left;
    }

    gap: 12px;
    padding: 36px 12px;

    @media screen and (min-width: 768px){
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }


`;

export default StyledHeader;