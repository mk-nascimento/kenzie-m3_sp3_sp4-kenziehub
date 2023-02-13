import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Register from "../pages/register";

const AppRoutes = () => {
  const [user, setUser] = useState({});

  return (
    <>
      <Routes>
        <Route path="/" element={<Login userStates={[user, setUser]} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<Dashboard userStates={[user, setUser]} />}
        />
      </Routes>
      <ToastContainer autoClose draggable />
    </>
  );
};

export default AppRoutes;
