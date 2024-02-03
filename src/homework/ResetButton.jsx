import { useContext } from "react";
import { SumContext } from "./SumContext";

function ResetButton() {
  const { setReset, setSum } = useContext(SumContext);
  return (
    <button
      onClick={() => {
        setReset(true);
        setSum(0);
      }}
      style={{ background: "forestgreen" }}
    >
      Reset
    </button>
  );
}
export default ResetButton;
