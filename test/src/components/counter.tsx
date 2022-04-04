import React, { useState } from "react";
import * as S from './styles';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const increase = () => setCount(count + 1);
  const decrease = () => {
    count < 0 ? setCount(count - 1) : setCount(count);
  };
  return (
    <S.div>
      <h1>{count}</h1>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </S.div>
  );
};

export default Counter;
