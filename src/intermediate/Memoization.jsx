import { useCallback, useEffect, useMemo, useState } from "react";

const initApp = () => {
  const memoizedMultBy10 = memoize(multiply);
  console.log(memoizedMultBy10(5));
  console.log(memoizedMultBy10(5));
  console.log(memoizedMultBy10(10));
  console.log(memoizedMultBy10(10));
  const memoizedMany = memoize(addMany);
  console.log(memoizedMany(1, 2, 3, 4, 5));
  console.log(memoizedMany(1, 2, 3, 4, 5));
  console.log(memoizedMany(6, 5, 7));
  console.log(memoizedMany(6, 5, 7));
  //   const memoizedFib = memoize(fib);
  //   console.log(memoizedFib(40));
  //   console.log(memoizedFib(40));
  //   console.log(memoizedFib(40));
};

document.addEventListener("DOMContentLoaded", initApp);

const multiply = (num) => {
  return num * 10;
};
// const newFunc = memoize();
const fib = (pos) => {
  if (pos < 2) return pos;
  return fib(pos - 1) + fib(pos - 2);
};
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (args.toString() in cache) {
      console.log(cache);
      return cache[args.toString()];
    }
    const result = fn(...args);
    cache[args.toString()] = result;
    return result;
  };
};
const addMany = (...args) => {
  return args.reduce((acc, num) => acc + num, 0);
};

// const memoizedMultiply = () => {
//   const cache = {};
//   return (num) => {
//     if (num in cache) {
//       console.log(cache);
//       return cache[num];
//     }
//     const result = num * 10;
//     cache[num] = result;
//     return result;
//   };
// };
//******************************** */
//   useMemo

export function MemoApp() {
  const [number, setNumber] = useState(1);
  const [isDark, setIsdark] = useState(true);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  //-----------------------------------

  // use useMemo and useCallback when you have array or object and/or function that returns array or object which is then used in dependency array  of useEffect
  //useMemo = returned VALUE of function
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: isDark ? "DarkGray" : "palegreen",
      width: "100px",
      height: "30px",
      borderRadius: "8px",
    };
  }, [isDark]);
  // useCallback = ENTIRE FUNCTION
  // can pass parameter
  const getItems = useCallback(
    (num) => {
      return [number, number + num, number + num + number];
    },
    [number]
  );

  useEffect(() => {
    console.log("I log because my object is different every time");
  }, [themeStyle]); // if there is OBJECT in dependency array, reference to that object is different/re-newed on every render, so useEffect will run on every render. wrap object in useMemo
  return (
    <>
      <input
        style={themeStyle}
        value={number}
        type="number"
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button style={{ background: "grey" }} onClick={() => setIsdark(!isDark)}>
        change theme
      </button>
      <p>{doubleNumber}</p>
      {getItems(5).map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
}
function slowFunction(num) {
  console.log("calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  console.log("🥱😴");
  return num * 2;
}
