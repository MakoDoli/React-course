import "./App.css";

import LifeCycle from "./intermediate/theory/LifeCycle";
import ButtonSum from "./homework/ButtonsSum";
import WithReducer from "./basics/withReducer";
import CalculatePrime from "./intermediate/hooks/useMemo";
import { StoreValue } from "./intermediate/hooks/useRefCarousel";
import SumProvider from "./intermediate/design patterns/CompoundButtons";

function App() {
  return (
    <div>
      <ButtonSum />
      <hr></hr>
      <LifeCycle />
      <WithReducer />
      <CalculatePrime />
      <StoreValue />
      <SumProvider>
        <SumProvider.MainBtn />
        <SumProvider.ResetBtn />
        <SumProvider.CountBtn />
        <SumProvider.CountBtn />
      </SumProvider>
    </div>
  );
}
export default App;
