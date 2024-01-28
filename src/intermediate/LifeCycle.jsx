import { useState } from "react";

function LifeCycle() {
  const text = "I was waiting for this!";
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button
        style={{ color: "tomato" }}
        onClick={() => setShowText(!showText)}
      >
        {showText ? "Hide text" : "display text"}
      </button>
      {showText && <p>{text}</p>}
    </div>
  );
}
export default LifeCycle;
