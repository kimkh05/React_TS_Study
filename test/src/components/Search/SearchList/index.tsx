import React from "react";
import * as S from '../styles';

const SList = ({id, name, date}: any) => {
  return (
    <>
      <S.List key={id}>
        <span className="title">{name}</span>
        <span className="date">{date}</span>
      </S.List>
    </>
  );
};

export default SList;
