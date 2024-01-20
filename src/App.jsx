import { useEffect, useState } from "react";
import "./App.css";
function App() {
  //1.   useState hook

  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Side effect from useEffect");
  }, []); // if remove dep.array, alert will run on every count update/button click

  return (
    <div>
      <p>count {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        increase count
      </button>
    </div>
  );
}

export default App;
