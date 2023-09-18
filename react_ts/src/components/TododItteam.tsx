import React from "react";

const TodoIteam: React.FC<{ todotext: string }> = (props) => {
  return <li>{props.todotext}</li>;
};

export default TodoIteam;
