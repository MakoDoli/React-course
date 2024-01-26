import { useContext, useState } from "react";
import { SumContext } from "./SumContext";

function Button() {
  const { setSum } = useContext(SumContext);
  const [count, setCount] = useState(0);

  return (
    <button
      style={{
        margin: "10px 10px",
        background: "aliceBlue",
        borderRadius: "8px",
      }}
      onClick={() => {
        setCount((prev) => prev + 1);
        setSum((prev) => prev + 1);
      }}
    >
      {count}
    </button>
  );
}
export default Button;
