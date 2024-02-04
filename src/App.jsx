import "./App.css";

import LifeCycle from "./intermediate/theory/LifeCycle";
import ButtonSum from "./homework/ButtonsSum";
import { TextWithStyle } from "./intermediate/design patterns/HOC";

function App() {
  return (
    <div>
      <ButtonSum />
      <hr></hr>
      <LifeCycle />
      <TextWithStyle />
    </div>
  );
}
export default App;
