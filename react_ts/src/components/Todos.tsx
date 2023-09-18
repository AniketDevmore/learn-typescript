import React from "react";
import Todo from "../models/todo";
import TodoIteam from "./TododItteam";
import classes from "./Todos.module.css";

const Todos: React.FC<{
  iteams: Todo[];
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.iteams.map((ele) => (
        <TodoIteam
          key={ele.id}
          todotext={ele.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, ele.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
