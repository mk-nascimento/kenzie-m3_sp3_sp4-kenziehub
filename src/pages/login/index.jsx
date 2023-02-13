import StyledLogin from "./styles";
import Input from "/src/components/Input";
import Form from "/src/styles/form.js";
import Logo from "/src/assets/logo.svg";
import Button, { Link } from "/src/styles/button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validations";

import api from "/src/services/api.js";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = ({ userStates }) => {
  const [user, setUser] = userStates;
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const storage = (data) => {
    localStorage.setItem("@USERID", data.user.id);
    localStorage.setItem("@TOKEN", data.token);
  };

  const submit = async (data) => {
    try {
      const response = await api.post("/sessions", data);

      setUser(response.data.user);
      setDisabled(true);
      navigate("/dashboard");

      response.data ? storage(response.data) : null;

      toast.success("Login realizado !", {
        autoClose: 2000,
        className: "color-grey-2 fill-negative",
        progressClassName: "bg-sucess",
      });
    } catch (error) {
      toast.error("Dados inválidos !", {
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
    <StyledLogin className="form-container column center">
      <header>
        <img src={Logo} alt={`Logo ${document.title}`} />
      </header>
      <main>
        <Form className="form-login column" onSubmit={handleSubmit(submit)}>
          <h1 className="form-title__login Title1">Login</h1>

          <Input
            className=""
            disabled={disabled}
            error={errors.email?.message}
            id="email"
            label="Email:"
            placeholder="Digite seu Email"
            type="text"
            {...register("email")}
          />

          <Input
            className=""
            disabled={disabled}
            error={errors.password?.message}
            id="password"
            label="Senha:"
            placeholder="Digite sua Senha"
            type="password"
            {...register("password")}
          />

          <Button
            className={`bg-primary${disabled ? " disabled" : ""}`}
            disabled={disabled}
            type="submit">
            Entrar
          </Button>

          <p className="form__not-user color-grey-1 HeadlineBold">
            Ainda não possui uma conta?
          </p>

          <Link className="bg-grey-2" to={"/register"}>
            Cadastre-se
          </Link>
        </Form>
      </main>
    </StyledLogin>
  );
};

export default Login;
