import * as React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import List from "../components/list/list";
import Search from "../components/Search/search";
import ErrorPage from "../components/ErrorPage/errorPage";

const UserRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/list/:name" element={<List />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UserRouter;
