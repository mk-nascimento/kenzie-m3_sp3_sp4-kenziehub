import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../components/Modal";
import { TechContext } from "../contexts/TechContext";

import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";

const AppRoutes = () => {
  const {
    modalStates: [typeModal],
  } = useContext(TechContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {typeModal ? <Modal /> : null}
      <ToastContainer autoClose draggable />
    </>
  );
};

export default AppRoutes;
