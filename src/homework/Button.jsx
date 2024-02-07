import { useContext, useEffect, useState } from "react";
import { SumContext } from "./SumContext";
import useWindowSize from "../intermediate/hooks/custom/usWindowSize";

function Button() {
  const size = useWindowSize();

  const { setSum, reset, setReset } = useContext(SumContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reset) {
      setCount(0);
      setReset(false);
    }
  }, [reset]);
  return (
    <button
      style={{
        margin: "10px 10px",
        background: `${size > 760 ? "#e57d90" : "yellow"}`,
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
