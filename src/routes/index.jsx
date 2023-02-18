import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../components/Modal";

import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/modal" element={<Modal />} />
      </Routes>
      <ToastContainer autoClose draggable />
    </>
  );
};

export default AppRoutes;
