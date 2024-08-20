import React, { useState } from "react";

export default function Input({ dispatch }) {
  const [val, setVal] = useState("");
  const add = () => {
    setVal("")
    dispatch({
        type:'add',
        text: val,
        id: Math.random().toFixed(3) * 100
    })
  }
  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={add}>添加</button>
    </div>
  );
}
