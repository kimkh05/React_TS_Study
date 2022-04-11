import React, { useEffect } from "react";
import * as S from "./styles";
import { SearchData } from "../../constance/Search";

const List: React.FC = ({ props }: any) => {
  console.log(props);
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
        </S.Post>
      </S.Wrapper>
    </>
  );
};

export default List;
