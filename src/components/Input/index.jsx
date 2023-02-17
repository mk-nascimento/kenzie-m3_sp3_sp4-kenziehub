import { forwardRef, useState } from "react";
import InputContainer from "./styles";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({ disabled, error, id, label, type, ...rest }, ref) => {
  const [inputType, setInputType] = useState(type);
  const passwordInput = type == "password";

  const showPassword = () =>
    inputType == "password" ? setInputType("text") : setInputType("password");

  return (
    <InputContainer className="column">
      <label htmlFor={id}>{label}</label>

      <div className="input-place">
        <input
          disabled={disabled}
          id={id}
          ref={ref}
          type={inputType ? inputType : "text"}
          {...rest}
        />

        {passwordInput ? (
          <button disabled={disabled} type="button" onClick={showPassword}>
            {inputType == "password" ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        ) : (
          <></>
        )}
      </div>

      {error ? <small>{error}</small> : null}
    </InputContainer>
  );
};

export default forwardRef(Input);
