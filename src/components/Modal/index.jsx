import Input from "../Input";
import StyledModal, {
  CloseIcon,
  ModalCloseButton,
  ModalSelectStatus,
} from "./styles";
import Form from "/src/styles/form";

const Modal = () => {
  /**
            className=""
            disabled={disabled}
            error={errors.email?.message}
            id="email"
            label="Email:"
            placeholder="Digite seu Email"
            type="text"
            {...register("email")}

 */
  const selectOptions = [
    { option: "Iniciante", value: "iniciante" },
    { option: "Intermediário", value: "intermediario" },
    { option: "Avançado", value: "avancado" },
  ];

  return (
    <StyledModal className="flex a-center j-center" role={"dialog"}>
      <div className="modal-content">
        <div className="modal-header bg-grey-2 row a-center j-between">
          <h2 className="Title3">Modal Title</h2>

          <ModalCloseButton className="bg-none">
            <CloseIcon className="flex" />
          </ModalCloseButton>
        </div>

        <Form className="column">
          <Input
            className=""
            id="title"
            label="title"
            placeholder="Nome da tecnologia"
          />
          <ModalSelectStatus className="bg-grey-2 color-grey-1">
            {selectOptions.map((selectOption) => (
              <option key={selectOption.value} value={selectOption.value}>
                {selectOption.option}
              </option>
            ))}
          </ModalSelectStatus>
        </Form>
      </div>
    </StyledModal>
  );
};

export default Modal;
