import StyledMainContainer from "./styles";
import Nav from "/src/components/Nav";
import Header from "/src/components/Header";

import { useContext } from "react";
import { UserContext } from "/src/contexts/UserContext";

const Dashboard = () => {
  document.title = "Kenzie Hub - Dashboard";

  const {
    userStates: [user, ,],
  } = useContext(UserContext);

  return (
    <>
      <Nav buttonText="Sair" classNameNav="container__dash-page" />
      <Header user={user} />
      <main>
        <StyledMainContainer className="dash-page__main column"></StyledMainContainer>
      </main>
    </>
  );
};

export default Dashboard;
