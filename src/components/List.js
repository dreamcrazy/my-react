import React, { useReducer } from "react";
import Input from "./Input";
import Item from "./Item";

export default function List() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      id,
    });
  };

  const handleEdit = (task) => {
    dispatch({
      type: "edit",
      task
    });
  };
  return (
    <div>
      <Input dispatch={dispatch}></Input>
      <ul>
        {tasks.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          ></Item>
        ))}

        {
            JSON.stringify(tasks)
        }
      </ul>
    </div>
  );
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case "delete":
      return state.filter((item) => item.id !== action.id);
    case "edit":
      return state.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    default:
      break;
  }
};
