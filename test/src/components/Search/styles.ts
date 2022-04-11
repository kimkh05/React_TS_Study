import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1680px;
  height: 970px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ede7f6;
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

export const InputDiv = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-top: 100px;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #1a73e8;
  cursor: pointer;
  color: white;
  margin-bottom: 20px;
  :hover {
    background-color: white;
    color: black;
  }
  span {
    font-size: 12px;
    font-weight: 600;
  }
`;

export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.div`
  width: 700px;
  height: 50px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
  .title {
    font-size: 24px;
    font-weight: bold;
    text-overflow: ellipsis;
    width: 170px;
    height: 25px;
    white-space: nowrap;
    overflow: hidden;
  }
  .date {
    font-size: 14px;
    color: #8888;
  }
`;
