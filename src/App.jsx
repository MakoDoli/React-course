import {
  useCallback,
  useDebugValue,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import "./App.css";
import { MoodContextProvider } from "./basics/MoodContext";
import { MoodEmoji } from "./basics/MoodEmoji";

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

  // useMemo hook

  const square = useMemo(() => {
    console.log("render happened");
    return (count * Math.random()).toFixed(3);
  }, [count]);
  // const square = (count * Math.random()).toFixed(3);

  // useCallback hook

  const legacy = useCallback(() => {
    console.log("callback created");
    alert("I'm from useCallback");
  }, []);

  //useLayoutEffect hook

  const [width, setWidth] = useState(100);
  const boxRef = useRef();

  useLayoutEffect(() => {
    const boxHeight = boxRef.current.clientHeight;
    setWidth(boxHeight * 2);
  }, []);

  // custom hook
  const displayName = useDisplayName();
  console.log(displayName);

  return (
    <div>
      <p>count {count}</p>
      <p>
        expensive computation of {count} is {square}
      </p>
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
        onClick={() =>
          dispatch({
            type: "changeName",
            payload: "Juansher" + Math.random().toFixed(2),
          })
        }
      >
        dispatch defence!
      </button>
      <p>{state.name}</p>
      <SomeChild onClick={legacy}>call it</SomeChild>

      <div
        ref={boxRef}
        style={{ width: `${width}px`, height: "100px", background: "yellow" }}
      >
        I was measured before painting
      </div>
      <span>{displayName}</span>
    </div>
  );
}
// function MoodEmoji() {
//   const mood = useContext(MoodContext);
//   return <p>{mood}</p>;
// }

// eslint-disable-next-line react/prop-types
function SomeChild({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

// create custom hook

function useDisplayName() {
  const [displayName, setDisplayName] = useState("just name");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/4").then((res) =>
      res.json().then((data) => setDisplayName(data.name))
    );
  }, []);
  useDebugValue(displayName ?? "Loading...");

  return displayName;
}
export default App;
