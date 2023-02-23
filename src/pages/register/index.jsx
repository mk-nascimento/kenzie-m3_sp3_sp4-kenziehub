import { registerInputs } from "./inputsData";
import { StyledRegister, Select } from "./styles";
import { Input } from "/src/components/Input";
import { Nav } from "/src/components/Nav";
import { Button } from "/src/styles/button";
import { Form } from "/src/styles/form.js";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { useContext } from "react";
import { UserContext } from "/src/contexts/UserContext";

export const Register = () => {
  document.title = "Kenzie Hub - Register";

  const { disabled, register: registerForm } = useContext(UserContext);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const modules = [
    {
      moduleValue: "Primeiro módulo (Introdução ao Frontend)",
      option: "1 º Módulo",
    },
    { moduleValue: "Segundo módulo (Frontend Avançado)", option: "2 º Módulo" },
    {
      moduleValue: "Terceiro módulo (Introdução ao Backend)",
      option: "3 º Módulo",
    },
    { moduleValue: "Quarto módulo (Backend Avançado)", option: "4 º Módulo" },
  ];

  return (
    <>
      <Nav
        buttonText="Voltar"
        classNameNav="container__form-page"
        page="register"
      />
      <main>
        <StyledRegister className="container__form-page">
          <Form
            className="form-register radius column"
            onSubmit={handleSubmit(registerForm)}
          >
            <h1 className="form-title__register Title1">Crie sua conta</h1>

            <p className="form-desc__register color-grey-1">
              Rapido e grátis, vamos nessa
            </p>

            {registerInputs.map(({ id, label, placeholder, type }) => (
              <Input
                disabled={disabled}
                error={errors[`${id}`]?.message}
                id={id}
                key={id}
                label={label}
                placeholder={placeholder}
                type={type}
                {...register(id)}
              />
            ))}

            <div className="select-place column">
              <label htmlFor="course_module">Selecionar módulo :</label>
              <Select
                {...register("course_module")}
                defaultValue=""
                disabled={disabled}
                id="course_module"
              >
                <option value="" disabled>
                  Selecione seu módulo
                </option>

                {modules.map(({ moduleValue, option }) => (
                  <option key={option} value={moduleValue}>
                    {option}
                  </option>
                ))}
              </Select>
              {errors ? (
                <small>{errors["course_module"]?.message}</small>
              ) : null}
            </div>

            <Button
              className={`bg-primary${disabled ? " disabled" : ""}`}
              disabled={disabled}
              type="submit"
            >
              Cadastrar
            </Button>
          </Form>
        </StyledRegister>
      </main>
    </>
  );
};
