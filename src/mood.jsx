import { useContext, useState } from "react";
import { MoodContext } from "./MoodContext";
export function MoodEmoji() {
  const emoji = useContext(MoodContext);
  const [mood, setMood] = useState(emoji.happy);

  return (
    <button
      onClick={() => {
        setMood(mood === emoji.happy ? emoji.sad : emoji.happy);
      }}
    >
      {mood}
    </button>
  );
}
