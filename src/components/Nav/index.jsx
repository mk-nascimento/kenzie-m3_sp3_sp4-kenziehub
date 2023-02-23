import Logo from "/src/assets/logo.svg";
import { Button } from "/src/styles/button";
import { Container } from "/src/styles/container";
import { StyledNav } from "./styles";
import { useContext } from "react";
import { UserContext } from "/src/contexts/UserContext";

export const Nav = ({ buttonText, classNameNav, page }) => {
  const { logout, navigate } = useContext(UserContext);
  const backPage = () => navigate("/");

  return (
    <StyledNav>
      <Container className={`nav ${classNameNav} row a-center j-between`}>
        <img src={Logo} alt={`Logo ${document.title}`} />

        <Button
          className="bg-grey-2"
          onClick={page == "register" ? backPage : logout}
        >
          {buttonText}
        </Button>
      </Container>
    </StyledNav>
  );
};
