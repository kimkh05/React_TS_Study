import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1680px;
  height: 970px;
  background: #ede7f6;
  display: flex;
  justify-content: center;
`;

export const Post = styled.div`
  margin-top: 50px;
  width: 800px;
  height: 900px;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 48px;
  font-weight: bold;
  margin: 50px 0 0 60px;
`;

export const Date = styled.span`
  font-size: 20px;
  padding-right: 50px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Line = styled.div`
  background: #000;
  width: 90%;
  height: 5px;
`;

export const Text = styled.span`
  height: 600px;
  margin-left: 50px;
  margin-bottom: 50px;
`;

export const Btn = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 10px;
`;
