import * as React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import List from "../components/list/list";
import Search from "../components/Search/search";

const UserRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UserRouter;
