import React, { useState } from "react";

const Counter = () => {
  // useState 훅을 사용하여 상태를 관리합니다.
  const [count, setCount] = useState(0);

  // 이벤트 핸들러 함수를 정의합니다.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>;
      <button onClick={handleIncrement}>Increment</button>;
      <button onClick={handleDecrement}>Decrement</button>;
    </div>
  );
};

export default Counter;
