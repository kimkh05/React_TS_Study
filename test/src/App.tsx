import React from "react";
import "./App.css";
import Search from "./components/Search/search";
import { GlobalStyle } from "./style/globalStyle";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Search />
    </>
  );
};

export default App;
