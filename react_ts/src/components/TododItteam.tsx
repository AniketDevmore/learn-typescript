import React from "react";
import classes from "./TodoItem.module.css";

const TodoIteam: React.FC<{ todotext: string }> = (props) => {
  return <li className={classes.item}>{props.todotext}</li>;
};

export default TodoIteam;
