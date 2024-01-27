import { useContext } from "react";
import { MoodContext } from "./MoodContext";
export function MoodEmoji() {
  const mood = useContext(MoodContext);
  //const [mood, setMood] = useState(emoji.happy);

  return (
    <>
      <p>{mood}</p>
      {/* <button
        onClick={() => {
          setMood(mood === emoji.happy ? emoji.sad : emoji.happy);
        }}
      >
        {mood}
      </button> */}
    </>
  );
}
