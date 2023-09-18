import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn react"), new Todo("Learn typescript")];

  return (
    <div>
      <Todos iteams={todos} />
    </div>
  );
}

export default App;
