import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import { MoodContextProvider } from "./MoodContext";
import { MoodEmoji } from "./MoodEmoji";
//-------------------
//Context API
// const moods = {
//   happy: "😄",
//   sad: "😥",
// };

// const MoodContext = createContext(moods);
// //----------------------
function App() {
  //1.   useState hook

  const [count, setCount] = useState(0);

  // 2. useEffect hook
  useEffect(() => {
    //alert("Side effect from useEffect");
    //return () => alert("Bye bye component");
  }, []); // if remove dep.array, alert will run on every count update/button click. check cleanup function by commenting out first alert

  // 3. useContext hook

  // 4. useRef hook

  const refCount = useRef(0);
  const myRefInput = useRef(null);
  useEffect(() => {
    if (myRefInput.current) {
      myRefInput.current.focus();
    }
  });

  //5. useReducer hook

  const objForReducer = { name: "Tina" };
  function reducer(state, action) {
    switch (action.type) {
      case "changeName":
        return { ...state, name: action.payload };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, objForReducer);

  return (
    <div>
      <p>count {count}</p>
      <MoodContextProvider>
        <MoodEmoji />
      </MoodContextProvider>
      <button onClick={() => setCount((count) => count + 1)}>
        increase count
      </button>
      <button onClick={() => refCount.current++}>
        no render from me {refCount.current}
      </button>
      <input ref={myRefInput} type="text" />
      <button
        onClick={() => dispatch({ type: "changeName", payload: "Juansher" })}
      >
        dispatch
      </button>
      <p>{state.name}</p>
    </div>
  );
}
// function MoodEmoji() {
//   const mood = useContext(MoodContext);
//   return <p>{mood}</p>;
// }
export default App;
