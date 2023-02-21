import styled, { keyframes } from "styled-components";
import Button from "/src/styles/button";
import { AiOutlineClose } from "react-icons/ai";

const scale = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

const StyledModal = styled.div`
  background-color: rgb(18 18 20 / 75%);
  height: 100%;
  padding: 12px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  & div.modal-header {
    border-radius: var(--radius-1) var(--radius-1) 0 0;
    padding: 12px 18px;
    position: relative;
    z-index: 150;
  }

  div.modal-header .Title3 {
    font-size: calc(12rem / 16);
  }

  & div.modal-content {
    position: relative;
    max-width: calc(368rem / 16);
    width: 100%;
    z-index: 200;
    animation: ${scale} 500ms linear;
  }

  & div.modal-content > form.modal-form {
    border-radius: 0 0 var(--radius-1) var(--radius-1);
    gap: 20px;
    padding-top: 20px;
  }

  & div.modal-select-place {
    gap: 18px;
  }

  form.modal-form > button,
  div.uptate-buttons > button {
    font-size: calc(12rem / 16);

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

  form.modal-form > div.update-buttons {
    gap: 22px;
  }

  div.uptate-buttons > {
    font-size: calc(12rem / 16);
  }

  div.update-buttons button.update-button {
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

  div.update-buttons button.delete-button {
    max-width: calc(98rem / 16);

    &:hover,
    &:focus {
      background-color: var(--grey-1);
      border-color: var(--grey-1);
    }
  }

  @media screen and (min-width: 768px) {
    div.modal-header .Title3 {
      font-size: calc(14rem / 16);
    }

    input,
    select {
      font-size: calc(16rem / 16);
    }

    form.modal-form > button,
    div.uptate-buttons > button {
      font-size: calc(16rem / 16);
    }
  }
`;

export const ModalCloseButton = styled( Button )`
  all: unset;
  cursor: pointer;
`;

export const CloseIcon = styled( AiOutlineClose )`
  & {
    fill: var(--grey-1);
  }
`;

export const ModalSelectStatus = styled.select`
  border-radius: var(--radius-1);
  border: 1px solid var(--grey-2);
  font-weight: 400;
  font-size: calc(12rem / 16);
  outline: none;
  padding: 10px 12px;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: var(--grey-0);
    color: var(--grey-0);
  }
`;

export default StyledModal;
