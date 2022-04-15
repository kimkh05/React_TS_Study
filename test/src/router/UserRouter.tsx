import * as React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import List from "../components/list/index";
import Search from "../components/Search/index";
import ErrorPage from "../components/ErrorPage/index";

const UserRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/list/:name/:date/:text" element={<List />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UserRouter;
