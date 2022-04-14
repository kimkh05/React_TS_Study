import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./styles";
import qs from 'qs';

const List: React.FC = ({location}:  any) => {
  console.log(location);
  return (
    <>
      <S.Wrapper>
        <S.Post>
          {/* {SearchData.map((value, index) => {
            return props.name === value.name ? (
              <div key={index}>
                <span>{value.name}</span>
                <span>{value.date}</span>
              </div>
            ) : null;
          })} */}
          <S.Title>Hello World</S.Title>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <S.Line />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <S.Date>2022.02.02</S.Date>
          </div>
          <S.Text>안녕하세요 반갑습니다.</S.Text>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <S.Btn>돌아가기</S.Btn>
            </Link>
          </div>
        </S.Post>
      </S.Wrapper>
    </>
  );
};

export default List;
