import { createContext } from "react";

const moods = {
  happy: "😄",
  sad: "😥",
};

export const MoodContext = createContext(moods);

export const MoodContextProvider = ({ children }) => {
  return (
    <MoodContext.Provider value={moods.happy}>{children}</MoodContext.Provider>
  );
};
