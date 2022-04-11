import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Search from "../components/Search/search";

const UserRouter: React.FC = () => {
    
  return (
    <BrowserRouter>
      <Route path="/" exact element={<Search />} />
      <Route path="/${s}" element={<$sss />}
    </BrowserRouter>
  );
};

export default UserRouter;
