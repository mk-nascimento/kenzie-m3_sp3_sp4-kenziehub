import Logo from "/src/assets/logo.svg";
import Button from "/src/styles/button";
import Container from "/src/styles/container";
import StyledNav from "./styles";
import { useNavigate } from "react-router-dom";

const Nav = ({ buttonText, classNameNav, page, userStates }) => {
  const navigate = useNavigate();
  const backPage = () => navigate("/");

  const logout = () => {
    const [_, setUser] = userStates;
    localStorage.clear();
    navigate("/");
    setUser({});
  };

  return (
    <StyledNav>
      <Container className={`${classNameNav} row a-center j-between`}>
        <img src={Logo} alt={`Logo ${document.title}`} />
        <Button
          className="bg-grey-2"
          onClick={page == "register" ? backPage : logout}>
          {buttonText}
        </Button>
      </Container>
    </StyledNav>
  );
};

export default Nav;
