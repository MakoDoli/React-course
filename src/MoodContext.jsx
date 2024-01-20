import { createContext } from "react";

const moods = {
  happy: "😄",
  sad: "😥",
};

export const MoodContext = createContext(moods);
