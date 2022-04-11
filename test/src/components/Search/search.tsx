import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { SearchData } from "../../constance/Search/index";
import NotInput from "../notInput/notInput";

interface SearchData {
  name: string;
  date: string;
}

interface EnumServiceItems extends Array<SearchData> {}

const Search:React.FC = () => {
  const [arr, setArr] = useState<EnumServiceItems>();
  const [input, setInput] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setArr(SearchData);
    console.log(SearchData);
    input === null || input === "" ? setCheck(false) : setCheck(true);
    console.log(check);
  }, [arr]);

  const change = (e: any) => {
    if(input === null || input === "") {
      setCheck(false);
    }
    setInput(e.target.value);
  };

  const onEnter = (e: any) => {
    if (e.key === "Enter") {
      console.log("Click enter");
      setCheck(true);
      click();
    }
  };

  const click = () => {
    console.log("input 값 : " + input);
    console.log("받아오는 데이터의 배열 : " + arr);
    setCount(count + 1);

  };

  return (
    <>
      <S.Wrapper>
        <S.InputDiv>
          <S.Input
            onKeyPress={onEnter}
            placeholder="검색어를 입력하세요."
            onChange={change}
            value={input}
          />
        </S.InputDiv>
        <S.Button onClick={click}>
          <span>검색</span>
        </S.Button>
        <S.Ul>
          {/* {arr?.map((value, page) => {
            // 처음 값은 undefined이므로 ?를 붙인다.
            return check === true ? (
              input === value.name || input === value.date ? (
                <S.List key={page}>
                  <span className="title">{value.name}</span>
                  <span className="date">{value.date}</span>
                </S.List>
              ) : null
            ) : (
              <NotInput />
            );
          })} */}
          {check === true ? (
            arr?.map((value, page) => {
              return input === value.name || input === value.date ? (
                <S.List key={page}>
                  <span className="title">{value.name}</span>
                  <span className="date">{value.date}</span>
                </S.List>
              ) : null;
            })
          ) : (
            <NotInput />
          )}
        </S.Ul>
      </S.Wrapper>
    </>
  );
}

export default Search;
