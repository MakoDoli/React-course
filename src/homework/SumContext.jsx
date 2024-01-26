import { createContext, useState } from "react";

export const SumContext = createContext({ sum: 0, setSum: () => {} });

// eslint-disable-next-line react/prop-types
export const SumProvider = ({ children }) => {
  const [sum, setSum] = useState(0);
  return (
    <SumContext.Provider value={{ sum, setSum }}>
      {children}
    </SumContext.Provider>
  );
};
