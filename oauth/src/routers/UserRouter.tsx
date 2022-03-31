import { Route, Routes } from "react-router-dom";
import React from "react";
import Main from "../components/main/main";
import Login from "../components/login/login";

const UserRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/callback" element={<Login />} />
    </Routes>
  );
};

export default UserRouter;
