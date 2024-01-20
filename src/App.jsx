import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //1.   useState hook

  const [count, setCount] = useState(0);

  // 2. useEffect hook
  useEffect(() => {
    alert("Side effect from useEffect");
    return () => alert("Bye bye component");
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
