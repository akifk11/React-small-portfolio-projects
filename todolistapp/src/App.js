import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: todo,
    };
    if (!todo) {
      alert("empty todo input");
      return;
    }

    setTodos((prevState) => [...prevState, item]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    const newArray = todos.filter((item) => item.id !== id);
    setTodos(newArray);
  };

  return (
    <div className="App">
      <div className="header">
        <h2>my todo app</h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="bir todo giriniz"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <div className="todos">
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              {item.value}
              <button onClick={() => deleteTodo(item.id)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-todo">
        <button onClick={addTodo}>add todo</button>
      </div>
    </div>
  );
}

export default App;
