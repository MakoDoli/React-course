import { createContext, useContext } from "react";

const moods = {
  happy: "😄",
  sad: "😥",
};
const MoodContext = createContext(moods);

function Test() {
  return (
    
      <div>
        <MoodEmoji />
      </div>
    
  );
}
function MoodEmoji() {
  const emoji = useContext(MoodContext);

  return (
    <p>
      Don&apos;t be {emoji.sad}, be {emoji.happy}
    </p>
  );
}
export default Test;
