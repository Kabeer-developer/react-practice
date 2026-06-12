import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]);

  function addTodo() {
    if (!task.trim()) return;
    setTodo([...todos, { text: task, completed: false }]);
    setTask("");
  }

  function delTodo(index) {
    setTodo(todos.filter((_, i) => i !== index));
  }

  function toggleTodo(index) {
    setTodo(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button onClick={() => addTodo()}> Add</button>
      {todos.map((todo, index) => {
        return (
          <li
            key={index}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
            <button onClick={() => toggleTodo(index)}>
              {todo.completed ? "undo" : "Mark"}
            </button>
            <button onClick={() => delTodo(index)}>X</button>
          </li>
        );
      })}
    </div>
  );
}

export default Todo;
