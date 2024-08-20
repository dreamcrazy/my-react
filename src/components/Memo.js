import React, { useCallback, useMemo, useState } from "react";
import Form from "./Form";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function Memo() {
  const [name, setName] = useState('');
  const [id, setId] = useState(0);
  const change = () => {
    setId(Math.floor(Math.random().toFixed(2) * 10));
  };
  const changeName = () => {
    setName(n => '张三' + Math.random().toFixed(2));
  };

  const getId = useMemo(() => {
    return filterId(id, list)
  },[id]);

  const [personName,setPersonName] = useState('张三')
  const onChange = useCallback((e) => {
    setPersonName(e.target.value)
  },[])
  return (
    <div>
        <p>name: {name}</p>
      <p>id: {id}</p>
      <p>计算拿到的id: {getId}</p>
      <button onClick={change}>修改id</button>
      <button onClick={changeName}>修改name</button>
      <Form name={personName} onChange={onChange}></Form>
    </div>
  );
}

const filterId = (id, list) => {
  console.log("执行计算id方法");
  return list.find((item) => item === id);
};
