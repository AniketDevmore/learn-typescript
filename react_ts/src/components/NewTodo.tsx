import React, { useRef } from "react";

const NewTodos: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw error
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo text : </label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodos;
