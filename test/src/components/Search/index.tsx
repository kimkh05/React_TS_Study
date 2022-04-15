import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { SearchData } from "../../constance/Search/index";
import NotInput from "../notInput/notInput";
import { Link } from "react-router-dom";
import SList from "./SearchList";

interface SearchData {
  name: string;
  date: string;
  text: string;
  id: number;
}

interface EnumServiceItems extends Array<SearchData> {}

const Search = () => {
  const [arr, setArr] = useState<EnumServiceItems>();
  const [input, setInput] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setArr(SearchData);
    input === null || input === "" ? setCheck(false) : setCheck(true);
  }, [arr]);

  const change = (e: any) => {
    e.preventDefault();
    if (input === null || input === "") {
      setCheck(false);
    }
    setInput(e.target.value);
  };

  const click = (e: any) => {
    if (e.key === "Enter") {
      console.log("Click Enter Key!");
      setCheck(true);
    }
    setCount(count + 1);
  };

  return (
    <>
      <S.Wrapper>
        <S.InputDiv>
          <S.Input
            onKeyPress={click}
            placeholder="검색어를 입력하세요."
            onChange={change}
            value={input}
          />
        </S.InputDiv>
        <S.Button onClick={click}>
          <span>검색</span>
        </S.Button>
        <S.Ul>
          {check === true ? (
            arr?.map((value, index) => {
              // 처음 값은 undefined이므로 ?를 붙인다.
              return input === value.name || input === value.date ? (
                <Link
                  to={`/list/${value.name}/${value.date}/${value.text}`}
                  style={{ textDecoration: "none" }}
                >
                  <SList
                    key={index}
                    id={value.id}
                    name={value.name}
                    date={value.date}
                    text={value.text}
                  />
                </Link>
              ) : null;
            })
          ) : (
            <NotInput />
          )}
        </S.Ul>
      </S.Wrapper>
    </>
  );
};

export default Search;
