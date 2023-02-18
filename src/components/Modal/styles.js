import styled from "styled-components";
import Button from "/src/styles/button";
import { AiOutlineClose } from "react-icons/ai";

const StyledModal = styled.div`
  height: 100%;
  padding: 12px;
  position: fixed;
  width: 100%;
  z-index: 100;

  & div.modal-header {
    border-radius: var(--radius-1) var(--radius-1) 0 0;
    padding: 12px 18px;
    position: relative;
    z-index: 150;
  }

  & div.modal-content {
    position: relative;
    width: 100%;
    z-index: 200;
  }

  & div.modal-content > form {
    border-radius: 0 0 var(--radius-1) var(--radius-1);
    gap: 20px;
  }
`;

export const ModalCloseButton = styled( Button )`
  all: unset;
`;

export const CloseIcon = styled( AiOutlineClose )`
  & {
    fill: var(--grey-1);
  }
`;

export const ModalSelectStatus = styled.select`
  border-radius: var(--radius-1);
  border: 2px var(--grey-2);
  font-weight: 400;
  font-size: calc(12rem / 16);
  outline: none;
  padding: 10px 12px;

  &:hover,
  &:focus {
    border-color: var(--grey-0);
    color: var(--grey-0);
  }
`;

export default StyledModal;
