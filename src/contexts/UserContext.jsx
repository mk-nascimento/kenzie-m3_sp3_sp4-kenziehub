import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "/src/services/api.js";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [disabled, setDisabled] = useState(false);
  const [userloading, setUSerLoading] = useState(false);
  const [user, setUser] = useState({});

  const Location = useLocation();
  const navigate = useNavigate();

  const id = localStorage.getItem("@USERID") || null;
  const token = localStorage.getItem("@TOKEN") || null;
  const isDashboard = Location.pathname.includes("dashboard");

  useEffect(() => {
    !id && !token && isDashboard
      ? navigate("/")
      : id && token
      ? showProfile()
      : null;
  }, []);

  const storage = (data) => {
    data
      ? (localStorage.setItem("@USERID", data.user.id),
        localStorage.setItem("@TOKEN", data.token))
      : localStorage.clear();
  };

  const login = async (data) => {
    try {
      setDisabled(true);

      const response = await api.post("/sessions", data);

      response.data
        ? (storage(response.data), setUser(response.data.user))
        : null;

      toast.success("Login realizado !", {
        autoClose: 2000,
        className: "color-grey-2 fill-negative",
        progressClassName: "bg-sucess",
      });

      navigate("/dashboard");
    } catch (error) {
      toast.error("Dados inválidos !", {
        autoClose: 2000,
        className: "color-grey-2 fill-negative",
        progressClassName: "bg-negative",
      });

      console.error(error);
    } finally {
      setDisabled(false);
    }
  };

  const register = async (data) => {
    try {
      const response = await api.post("/users", data);

      toast.success("Cadastro realizado !", {
        autoClose: 2000,
        className: "color-grey-2 fill-negative",
        progressClassName: "bg-sucess",
      });

      setUser(response.data);
      navigate("/");
    } catch (error) {
      toast.error("Não foi possível realizar seu cadastro !", {
        autoClose: 2000,
        className: "color-grey-2 fill-negative",
        progressClassName: "bg-negative",
      });

      console.error(error);
    } finally {
      setDisabled(false);
    }
  };

  const showProfile = async () => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const profile = await api("/profile");

      profile.data ? setUser(profile.data) : null;
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    storage();
    navigate("/");
  };

  const values = {
    disabled,
    id,
    loadingStates: [userloading, setUSerLoading],
    login,
    logout,
    navigate,
    register,
    showProfile,
    storage,
    token,
    user,
    userStates: [user, setUser],
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
