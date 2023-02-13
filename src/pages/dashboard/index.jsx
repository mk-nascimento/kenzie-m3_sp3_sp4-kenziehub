import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledMainContainer from "./styles";
import Header from "/src/components/Header";
import Nav from "/src/components/Nav";
import api from "/src/services/api.js";

const Dashboard = ({ userStates }) => {
  document.title = "Kenzie Hub - Dashboard";

  const id = localStorage.getItem("@USERID") || "";
  const token = localStorage.getItem("@TOKEN") || "";

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const showProfile = async () => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const profile = await api("/profile");
      setUser(profile.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!id) navigate("/");
    else if (id && token) showProfile();
  }, [id, token]);

  return (
    <>
      <Nav
        buttonText="Sair"
        classNameNav="container__dash-page"
        userStates={userStates}
      />
      <Header user={user} />
      <main>
        <StyledMainContainer className="dash-page__main column">
          <h2 className="Title1">Que pena! Estamos em desenvolvimento :(</h2>
          <h3 className="info">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </h3>
        </StyledMainContainer>
      </main>
    </>
  );
};

export default Dashboard;
