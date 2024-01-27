import { createContext, useState } from "react";

export const SumContext = createContext({
  sum: 0,
  setSum: () => {},
  reset: false,
  setReset: () => {},
});

// eslint-disable-next-line react/prop-types
export const SumProvider = ({ children }) => {
  const [sum, setSum, reset, setReset] = useState(0);
  return (
    <SumContext.Provider value={{ sum, setSum, reset, setReset }}>
      {children}
    </SumContext.Provider>
  );
};
