import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import UserRouter from "./routers/UserRouter";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserRouter />
    </BrowserRouter>
  );
};

export default App;
