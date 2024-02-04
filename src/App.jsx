import "./App.css";

import LifeCycle from "./intermediate/theory/LifeCycle";
import ButtonSum from "./homework/ButtonsSum";
import { FlyOut } from "./intermediate/design patterns/Compound";

function App() {
  return (
    <div>
      <ButtonSum />
      <hr></hr>
      <LifeCycle />
      <FlyOut.Input />
    </div>
  );
}
export default App;
