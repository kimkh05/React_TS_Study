import React from "react";
import UserRouter from "./router/UserRouter";
import { GlobalStyle } from "./style/globalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <UserRouter />
    </>
  );
};

export default App;
