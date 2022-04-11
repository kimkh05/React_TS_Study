import * as React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Search from "../components/Search/search";

const UserRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default UserRouter;
