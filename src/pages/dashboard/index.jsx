import StyledMainContainer from "./styles";
import Nav from "/src/components/Nav";
import Header from "/src/components/Header";

import { useContext } from "react";
import { UserContext } from "/src/contexts/UserContext";
import TechList from "/src/components/TechList";

const Dashboard = () => {
  document.title = "Kenzie Hub - Dashboard";

  const {
    loadingStates: [loading],
  } = useContext(UserContext);

  return (
    <>
      <Nav buttonText="Sair" classNameNav="container__dash-page" />
      <Header center={loading} />
      <main>
        <StyledMainContainer className="dash-page__main column">
          <TechList />
        </StyledMainContainer>
      </main>
    </>
  );
};

export default Dashboard;
