import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const increase = () => setCount(count + 1);
  const decrease = () => {
    count < 0 ? setCount(count - 1) : setCount(count);
  };
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
