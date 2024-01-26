import { useContext } from "react";
import { SumContext } from "./SumContext";

export default function MainButton() {
  const { sum } = useContext(SumContext);
  return (
    <button style={{ background: "powderblue", borderRadius: "8px" }}>
      Sum is {sum}
    </button>
  );
}
