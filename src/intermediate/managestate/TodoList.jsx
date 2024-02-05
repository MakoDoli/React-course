import { useEffect, useMemo, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  function addTodo() {
    setList([...list, todo]);
    setTodo("");
  }

  const obj = useMemo(() => {
    return { name: "eren" };
  }, []);

  useEffect(() => {
    console.log("object changed");
  }, [obj]);
  return (
    <div>
      <h2>TodoList</h2>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button style={{ background: "pink" }} onClick={addTodo}>
          Add
        </button>
      </div>
      <ul>
        {list.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </ul>
      <button
        style={{ background: "pink" }}
        onClick={() => setCount((num) => num + 1)}
      >
        {count}
      </button>
    </div>
  );
}
