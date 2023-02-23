import { StyledMainContainer } from "./styles";
import { Nav } from "/src/components/Nav";
import { Header } from "/src/components/Header";

import { useContext } from "react";
import { UserContext } from "/src/contexts/UserContext";
import { TechList } from "/src/components/TechList";

export const Dashboard = () => {
  document.title = "Kenzie Hub - Dashboard";

  const {
    loadingStates: [userLoading],
  } = useContext(UserContext);

  return (
    <>
      <Nav buttonText="Sair" classNameNav="container__dash-page" />
      <Header center={userLoading} />
      <main>
        <StyledMainContainer className="dash-page__main column">
          <TechList />
        </StyledMainContainer>
      </main>
    </>
  );
};
