import React, { useState, useEffect } from "react";
import { S } from "./styles";
import { SearchData } from "../../constance/Search/index";
import NotInput from "../notInput/notInput";

interface SearchData {
  name: string;
  date: string;
}

interface EnumServiceItems extends Array<SearchData> {}

function Search() {
  const [arr, setArr] = useState<EnumServiceItems>();
  const [input, setInput] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setArr(SearchData);
  }, [arr]);

  const change = (e: any) => {
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
          <span>Click Me!</span>
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
            arr?.map((index, page) => {
              return input === index.name || input === index.date ? (
                <S.List key={page}>
                  <span className="title">{index.name}</span>
                  <span className="date">{index.date}</span>
                </S.List>
              ) : (
                setCheck(false)
              );
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
