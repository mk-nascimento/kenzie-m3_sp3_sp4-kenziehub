import { useContext } from "react";
import { UserContext } from "/src/contexts/UserContext";
import StyledHeader from "./styles";
import Container from "/src/styles/container";
import LoadingComponent from "../Loading";

const Header = ({ center }) => {
  const {
    loadingStates: [loading],
    user,
  } = useContext(UserContext);

  return (
    <StyledHeader center={center}>
      <Container
        className={`container-header column${
          loading ? " a-center j-center" : ""
        }`}
      >
        {loading ? (
          <LoadingComponent height="calc(20rem/16)" />
        ) : (
          <>
            <h1 className="Title1">Olá, {user?.name}</h1>
            <p className="HeadlineBold color-grey-1">
              {user && user["course_module"]}
            </p>
          </>
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;
