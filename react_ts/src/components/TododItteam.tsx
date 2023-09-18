import React from "react";
import classes from "./TodoItem.module.css";

const TodoIteam: React.FC<{ todotext: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.todotext}
    </li>
  );
};

export default TodoIteam;
