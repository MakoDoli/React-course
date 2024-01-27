import { createContext } from "react";

const moods = {
  happy: "😄",
  sad: "😥",
};

export const MoodContext = createContext(moods);

// eslint-disable-next-line react/prop-types
export const MoodContextProvider = ({ children }) => {
  return (
    <MoodContext.Provider value={moods.happy}>{children}</MoodContext.Provider>
  );
};
