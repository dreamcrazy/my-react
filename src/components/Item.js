import React, { useContext, useState } from "react";
import { levelContext } from "./LevelContext";
export default function Item({ item, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [val,setVal] = useState(item.text)
  let content = item.text;
  if (isEditing) {
    content = <input type="text" value={val} onChange={e => setVal(e.target.value)} />;
  }

  const level = useContext(levelContext)

  const edit = () => {
    if(!isEditing) {
        setIsEditing(true);
    } else {
        handleEdit({...item,text: val})
        setIsEditing(false);
    }
  };

  const checkChange = (e) => {
    handleEdit({...item,done: e.target.checked})
  }
  return (
    <li>
        {level}
        <input type="checkbox" checked={item.done} onChange={checkChange} />
      {content}
      <button onClick={edit}>{isEditing ? "保存" : "编辑"}</button>
      <button onClick={() => handleDelete(item.id)}>删除</button>
    </li>
  );
}
