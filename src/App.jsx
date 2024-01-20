import { useEffect, useState } from "react";
import "./App.css";
import { MoodContext } from "./MoodContext";
import { MoodEmoji } from "./mood";
//-------------------
// Context API
const moods = {
  happy: "😄",
  sad: "😥",
};

// const MoodContext = createContext(moods);
//----------------------
function App() {
  //1.   useState hook

  const [count, setCount] = useState(0);

  // 2. useEffect hook
  useEffect(() => {
    alert("Side effect from useEffect");
    return () => alert("Bye bye component");
  }, []); // if remove dep.array, alert will run on every count update/button click. check cleanup function by commenting out first alert

  // 3. useContext hook

  return (
    <MoodContext.Provider value={moods}>
      <div>
        <p>count {count}</p>
        <MoodEmoji />
        <button onClick={() => setCount((count) => count + 1)}>
          increase count
        </button>
      </div>
    </MoodContext.Provider>
  );
}

export default App;
