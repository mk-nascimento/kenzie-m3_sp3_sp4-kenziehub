import StyledLogin from "./styles";
import Input from "/src/components/Input";
import Form from "/src/styles/form.js";
import Logo from "/src/assets/logo.svg";
import Button, { Link } from "/src/styles/button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validations";

import { useContext } from "react";
import { UserContext } from "/src/contexts/UserContext";

const Login = () => {
  document.title = "Kenzie Hub - Login";

  const { disabled, login } = useContext(UserContext);

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <StyledLogin className="form-container column center">
      <header>
        <img src={Logo} alt={`Logo ${document.title}`} />
      </header>
      <main>
        <Form className="form-login column" onSubmit={handleSubmit(login)}>
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
            type="submit"
          >
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
