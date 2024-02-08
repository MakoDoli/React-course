import "./App.css";

import LifeCycle from "./intermediate/theory/LifeCycle";
import ButtonSum from "./homework/ButtonsSum";
import WithReducer from "./basics/withReducer";
import CalculatePrime from "./intermediate/hooks/useMemo";

function App() {
  return (
    <div>
      <ButtonSum />
      <hr></hr>
      <LifeCycle />
      <WithReducer />
      <CalculatePrime />
    </div>
  );
}
export default App;
