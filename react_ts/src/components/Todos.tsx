import React from "react";
import Todo from "../models/todo";
import TodoIteam from "./TododItteam";

const Todos: React.FC<{ iteams: Todo[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.iteams.map((ele) => (
          <TodoIteam key={ele.id} todotext={ele.text} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
