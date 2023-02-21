import { useContext } from "react";
import { TechContext } from "/src/contexts/TechContext";
import Input from "../Input";
import StyledModal, {
  CloseIcon,
  ModalCloseButton,
  ModalSelectStatus,
} from "./styles";
import Button from "/src/styles/button";

import Form from "/src/styles/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema, updateSchema } from "./validations";

const Modal = () => {
  const {
    closeModal,
    defaultValues,
    deleteTech,
    disabled,
    modalStates: [typeModal],
    registerTech,
    selectOptions,
    updateTech,
  } = useContext(TechContext);

  const title =
    typeModal === "register-tech"
      ? "Cadastrar Tecnologia"
      : typeModal === "update-tech"
      ? "Tecnologia Detalhes"
      : "";

  const schema =
    typeModal === "register-tech"
      ? registerSchema
      : typeModal === "update-tech"
      ? updateSchema
      : null;

  const submit =
    typeModal === "register-tech"
      ? registerTech
      : typeModal === "update-tech"
      ? updateTech
      : null;

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <StyledModal className="flex a-center j-center" role={"dialog"}>
      <div className="modal-content">
        <div className="modal-header bg-grey-2 row a-center j-between">
          <h2 className="Title3">{title}</h2>

          <ModalCloseButton onClick={closeModal} className="bg-none">
            <CloseIcon className="flex" />
          </ModalCloseButton>
        </div>

        <Form className="modal-form column" onSubmit={handleSubmit(submit)}>
          <Input
            {...register("title")}
            className="modal-title-input"
            defaultValue={defaultValues.title}
            disabled={typeModal === "update-tech"}
            error={errors.title?.message}
            id="title"
            label="Nome"
            placeholder="Nome da tecnologia"
          />

          <div className="modal-select-place column">
            <label htmlFor="modal-select">Status</label>
            <ModalSelectStatus
              {...register("status")}
              className="bg-grey-2 color-grey-1"
              defaultValue={`${defaultValues.status}`}
              disabled={disabled}
              id="modal-select"
            >
              {selectOptions.map((selectOption) => (
                <option key={selectOption.value} value={selectOption.value}>
                  {selectOption.option}
                </option>
              ))}
            </ModalSelectStatus>
          </div>

          {typeModal === "register-tech" ? (
            <Button
              className={`bg-primary${disabled ? " disabled" : ""}`}
              disabled={disabled}
              type="submit"
            >
              Cadastrar Tecnologia
            </Button>
          ) : typeModal === "update-tech" ? (
            <div className="update-buttons row">
              <Button
                className={`update-button bg-primary${
                  disabled ? " disabled" : ""
                }`}
                disabled={disabled}
                type="submit"
              >
                Salvar alterações
              </Button>
              <Button
                className="delete-button bg-grey-2"
                onClick={deleteTech}
                type="button"
              >
                Excluir
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Form>
      </div>
    </StyledModal>
  );
};

export default Modal;
