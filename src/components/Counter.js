import React, { useState } from "react";
import "./Counter.css";

export default function Counter({name}) {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count+1)
  };
  return (
    <div className="counter">
        <p>{name}</p>
      {count}
      <button onClick={add}>+1</button>
    </div>
  );
}
