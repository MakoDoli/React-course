import "./App.css";

import LifeCycle from "./intermediate/theory/LifeCycle";
import ButtonSum from "./homework/ButtonsSum";
import WithReducer from "./basics/withReducer";

function App() {
  return (
    <div>
      <ButtonSum />
      <hr></hr>
      <LifeCycle />
      <WithReducer />
    </div>
  );
}
export default App;
