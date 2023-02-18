import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";
import api from "/src/services/api.js";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { disabled, id, isDashboard, Location, navigate, token, user } =
    useContext(UserContext);

  const [techs, setTechs] = useState([]);

  useEffect(() => {
    user.techs ? setTechs(user.techs) : null;
  }, [user]);

  useEffect(() => {
    console.log("techs:", techs);
    console.log("user.techs", user.techs);
  }, [techs]);

  const registerTech = async (data) => null;

  const updateTech = async (data) => null;

  const values = { registerTech, techs, updateTech };

  return <TechContext.Provider value={values}>{children}</TechContext.Provider>;
};
