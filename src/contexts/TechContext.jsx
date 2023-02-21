import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";
import api from "/src/services/api.js";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { token, user } = useContext(UserContext);

  const [defaultModalValues, setDefaultModalValues] = useState({
    status: "",
    title: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [techLoading, setTechLoading] = useState(false);
  const [techId, setTechId] = useState("");

  const [techs, setTechs] = useState([]);
  const [typeModal, setTypeModal] = useState(false);

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  useEffect(() => {
    user.id ? setTechLoading(false) : setTechLoading(true);

    user.techs ? setTechs(user.techs) : null;
  }, [user]);

  useEffect(() => {
    const findTech = techs.find((tech) => tech.id == techId);

    findTech ? setTechValues(findTech) : null;
  }, [techId]);

  const selectOptions = [
    { option: "Iniciante", value: "iniciante" },
    { option: "Intermediário", value: "intermediario" },
    { option: "Avançado", value: "avancado" },
  ];

  const setTechValues = (tech) =>
    setDefaultModalValues({ status: tech.status, title: tech.title });

  const okResponse = (responseStatus = number) =>
    responseStatus >= 200 && responseStatus < 300;

  const closeModal = () => {
    setDefaultModalValues({
      status: "",
      title: "",
    });

    setTechId("");

    setTypeModal(false);
  };

  const deleteTech = async () => {
    try {
      setDisabled(true);
      setTechLoading(true);

      const deleteResponse = await api.delete(`/users/techs/${techId}`);

      if (okResponse(deleteResponse.status)) {
        closeModal();

        toast.success("Tecnologia excluída!", {
          autoClose: 2000,
          className: "color-grey-2 fill-negative",
          progressClassName: "bg-sucess",
        });

        setTechs(techs.filter((tech) => tech.id !== techId));
        setTypeModal(false);
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar excluir!", {
        autoClose: 2000,
        className: "color-grey-2 fill-negative",
        progressClassName: "bg-negative",
      });

      console.error(error);
    } finally {
      setDisabled(false);
      setTechLoading(false);
    }
  };

  const registerModal = () => {
    setTypeModal("register-tech");
  };

  const updateModal = () => {
    const findTech = techs.find((tech) => tech.id == techId);

    findTech ? setTechValues(findTech) : null;

    setTypeModal("update-tech");
  };

  const registerTech = async (data) => {
    try {
      setDisabled(true);
      setTechLoading(true);

      const registerResponse = await api.post("/users/techs", data);

      if (okResponse(registerResponse.status)) {
        closeModal();

        toast.success("Tecnologia cadastrada!", {
          autoClose: 2000,
          className: "color-grey-2 fill-negative",
          progressClassName: "bg-sucess",
        });

        setTechs([...techs, registerResponse.data]);
        setTypeModal(false);
      }
    } catch (error) {
      toast.error("Não foi possível cadastrar a tecnologia!", {
        autoClose: 2000,
        className: "color-grey-2 fill-negative",
        progressClassName: "bg-negative",
      });

      console.error(error);
    } finally {
      setDisabled(false);
      setTechLoading(false);
    }
  };

  const updateStatusTech = (data) =>
    techs.map((tech) => {
      if (tech.id === techId) tech.status = data.status;
      return tech;
    });

  const updateTech = async (data) => {
    delete data.title;

    try {
      setDisabled(true);
      setTechLoading(true);

      const updateResponse = await api.put(`/users/techs/${techId}`, data);

      if (okResponse(updateResponse.status)) {
        closeModal();

        toast.success("Status de tecnologia atualizado!", {
          autoClose: 2000,
          className: "color-grey-2 fill-negative",
          progressClassName: "bg-sucess",
        });

        setTechs(updateStatusTech(data));
        setTypeModal(false);
      }
    } catch (error) {
      toast.error("Não foi possível atualizar a tecnologia!", {
        autoClose: 2000,
        className: "color-grey-2 fill-negative",
        progressClassName: "bg-negative",
      });

      console.error(error);
    } finally {
      setDisabled(false);
      setTechLoading(false);
    }
  };

  const values = {
    closeModal,
    defaultValues: defaultModalValues,
    deleteTech,
    disabled,
    techLoading,
    modalStates: [typeModal, setTypeModal],
    registerModal,
    registerTech,
    selectOptions,
    setTechId,
    techsStates: [techs, setTechs],
    updateModal,
    updateTech,
  };

  return <TechContext.Provider value={values}>{children}</TechContext.Provider>;
};
