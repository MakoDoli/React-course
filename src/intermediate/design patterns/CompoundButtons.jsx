import { createContext, useContext, useEffect, useState } from "react";

const SumContext = createContext({
  sum: 0,
  setSum: () => {},
  reset: false,
  setReset: () => {},
});

// eslint-disable-next-line react/prop-types
export default function SumProvider({ children }) {
  const [sum, setSum] = useState(0);
  const [reset, setReset] = useState(false);

  return (
    <SumContext.Provider value={{ sum, setSum, reset, setReset }}>
      {children}
    </SumContext.Provider>
  );
}

function MainBtn() {
  const { sum } = useContext(SumContext);

  return <button>Sum is {sum}</button>;
}

function ResetBtn() {
  const { setReset, setSum } = useContext(SumContext);

  return (
    <button
      onClick={() => {
        setReset(true);
        setSum(0);
      }}
    >
      reset
    </button>
  );
}

function CountBtn() {
  const [count, setCount] = useState(0);
  const { setSum, reset, setReset } = useContext(SumContext);

  useEffect(() => {
    if (reset) {
      setCount(0);
      setReset(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset]);

  return (
    <button
      onClick={() => {
        setCount((prev) => prev + 1);
        setSum((prev) => prev + 1);
      }}
    >
      {count}
    </button>
  );
}

SumProvider.MainBtn = MainBtn;
SumProvider.ResetBtn = ResetBtn;
SumProvider.CountBtn = CountBtn;
