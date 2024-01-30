import { useEffect, useState } from "react";

function LifeCycle() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button
        style={{ color: "tomato" }}
        onClick={() => setShowText(!showText)}
      >
        {showText ? "Hide text" : "display text"}
      </button>
      {showText && <Text />}
    </div>
  );
}
export default LifeCycle;
function Text() {
  const [text, setText] = useState("I was waiting for this!");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    console.log(
      "I logged because NO DEPENDENCY ARRAY and I'm NERVOUSS and ANXIOUS and REACT on everything!"
    );
  });
  useEffect(() => {
    console.log(
      "I log once when component mounts, because of empty dependency array"
    );

    return () => console.log("Rest In Piece, Dear component 🙏");
  }, []);
  useEffect(() => {
    console.log(
      "I log when input is focused because my dependency array contains isFocused state"
    );
  }, [isFocused]);
  return (
    <div>
      {" "}
      <input
        onFocus={() => setIsFocused(true)}
        placeholder="just press some keys"
        value={isFocused ? text : ""}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  );
}
