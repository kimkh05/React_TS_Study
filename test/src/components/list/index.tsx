import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { useParams } from "react-router";

const List: React.FC = () => {
  const { name } = useParams();
  const { date } = useParams();
  const { text } = useParams();
  console.log("넘어오는 변수들", name, date, text);
  return (
    <>
      <S.Wrapper>
        <S.Post>
          <S.Title>{name}</S.Title>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <S.Line />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <S.Date>{date}</S.Date>
          </div>
          <S.Text>{text}</S.Text>
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
