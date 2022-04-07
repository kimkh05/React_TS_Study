import axios from "axios";
import React, { useState } from "react";
import * as S from "./styled";

const Translation: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [source, setSource] = useState<string>("");
  const [target, setTarget] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
  const BaseURL = "https://openapi.naver.com";

  const click = () => {
    console.log("test");
    axios
      .post(`${BaseURL}/v1/papago/n2mt`, {
        source: source,
        target: target,
        text: text,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert("check");
        console.log(err);
      });
  };
  const checkData = () => {
    return check ? "display: flex;" : "display: none;";
  };

  return (
    <S.div>
      <div>
        <input type="text" />
        <input className="lan" type="text" />
        <button onClick={click}>click</button>
      </div>
      <p>Test text</p>
    </S.div>
  );
};

export default Translation;
