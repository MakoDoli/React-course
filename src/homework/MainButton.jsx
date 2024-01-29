//import { useContext } from "react";
import { SumContext, useSumContext } from "./SumContext";

export default function MainButton() {
  const { sum } = useSumContext(SumContext);
  return (
    <button style={{ background: "DodgerBlue", borderRadius: "8px" }}>
      Sum is {sum}
    </button>
  );
}
