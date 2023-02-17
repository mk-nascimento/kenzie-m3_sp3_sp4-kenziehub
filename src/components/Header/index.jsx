import { useContext } from "react";
import { UserContext } from "/src/contexts/UserContext";
import StyledHeader from "./styles";
import Container from "/src/styles/container";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <StyledHeader>
      <Container className="container-header column">
        <h1 className="Title1">Olá, {user?.name}</h1>
        <p className="HeadlineBold color-grey-1">
          {user && user["course_module"]}
        </p>
      </Container>
    </StyledHeader>
  );
};

export default Header;
