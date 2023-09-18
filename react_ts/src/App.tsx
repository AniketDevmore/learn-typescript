import { useState } from "react";
import "./App.css";
import NewTodos from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todotext: string) => {
    const newTodo = new Todo(todotext);

    setTodos((currentTodos) => {
      return currentTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodos onAddTodo={addTodoHandler} />
      <Todos iteams={todos} />
    </div>
  );
}

export default App;
