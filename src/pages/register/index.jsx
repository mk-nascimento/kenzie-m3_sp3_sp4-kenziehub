import registerInputs from "./inputsData";
import StyledRegister, { Select } from "./styles";
import Nav from "/src/components/Nav";
import Input from "/src/components/Input";
import Button from "/src/styles/button";
import Form from "/src/styles/form.js";
import api from "/src/services/api.js";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validations";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  document.title = "Kenzie Hub - Register";

  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = async (data) => {
    try {
      const response = await api.post("/users", data);

      navigate("/");

      toast.success("Cadastro realizado !", {
        autoClose: 2000,
        className: "color-grey-2 fill-negative",
        progressClassName: "bg-sucess",
      });
    } catch (error) {
      toast.error("Não foi possível realizar seu cadastro !", {
        autoClose: 2000,
        className: "color-grey-2 fill-negative",
        progressClassName: "bg-negative",
      });

      console.error(error);
    } finally {
      setDisabled(false);
    }
  };

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
            className="form-register column"
            onSubmit={handleSubmit(submit)}>
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
                id="course_module">
                <option value="" disabled>
                  Selecione seu módulo
                </option>
                <option value="1 º Módulo (Frontend iniciante)">
                  1 º Módulo
                </option>
                <option value="2 º Módulo (Frontend intermediário)">
                  2 º Módulo
                </option>
                <option value="3 º Módulo (Frontend avançado)">
                  3 º Módulo
                </option>
                <option value="4 º Módulo (Backend iniciante)">
                  4 º Módulo
                </option>
                <option value="5 º Módulo (Backend intermediário)">
                  5 º Módulo
                </option>
                <option value="6 º Módulo (Backend avançado)">
                  6 º Módulo
                </option>
              </Select>
              {errors ? (
                <small>{errors["course_module"]?.message}</small>
              ) : null}
            </div>

            <Button
              className={`bg-primary${disabled ? " disabled" : ""}`}
              disabled={disabled}
              type="submit">
              Cadastrar
            </Button>
          </Form>
        </StyledRegister>
      </main>
    </>
  );
};

export default Register;
