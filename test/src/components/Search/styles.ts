import styled from "styled-components";

export const S = {
  Wrapper: styled.div`
    width: 1680px;
    height: 970px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ede7f6;
  `,
  Input: styled.input`
    width: 400px;
    height: 40px;
    border: 1px solid black;
    margin-bottom: 10px;
    border-radius: 10px;
    margin-top: 100px;
  `,
  Button: styled.div`
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    background: #1a73e8;
    cursor: pointer;
    color: white;
    margin-bottom: 20px;
    :hover{
        background-color: white;
        color: black;
    }
    span{
        font-size: 12px;
        font-weight: 600;
    }
  `,
  Ul: styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  List: styled.div`
    width: 500px;
    height: 50px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;
    .title{
      font-size: 24px;
      font-weight: bold;
    }
    .date{
      font-size: 14px;
      color: #8888
    }
  `
};
