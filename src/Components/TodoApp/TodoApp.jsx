import "./TodoApp.css";
import { useState } from "react";

function TodoApp() {
  let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = daylist[new Date().getDay()];
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  const handleDelete = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const handleCheck = (id) => {
    setToDos(
      toDos.map((todo) => {
        if (todo.id === id) {
          todo.status = !todo.status;
        }
        return todo;
      })
    );
  };

  const handleAddTodo = () => {
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
    setToDo("");
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((todo) => (
          <div className="todo">
            <div className="left">
              <input
                onChange={() => handleCheck(todo.id)}
                checked={todo.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{todo.text}</p>
            </div>
            <div className="right">
            <i className="fa-solid fa-pen"></i>
              <i
                onClick={() => handleDelete(todo.id)}
                className="fas fa-times"
              ></i>
            </div>
          </div>
        ))}
        <h1 className="completed">Completed Task</h1>
        {toDos
          .filter((todo) => todo.status)
          .map((todo) => (
            <div className="todo">
              <div className="left">
                <input
                  onChange={() => handleCheck(todo.id)}
                  checked={todo.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{todo.text}</p>
              </div>
              <div className="right">
                
                <i
                  onClick={() => handleDelete(todo.id)}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoApp;
