// create container div and main button in it, which displays context's 'sum'
// create many buttons, increase their value by one onclick, (later sum up all button values in context)
// create states in each button
// make onClick handler increasing count
// create context object with sum ,setsum and reset/setReset -boolean
// create context provider and wrap buttons container div
// pass value object containting state of 'sum' and 'setSum', thtough provider
// import context through useContext hook in button component
// add useContext()'s setSum() to button onClick handler so it updates provider's 'sum'
//
// create reset button and add onClick listener setReset to change context's reset
//add useEffect to buttons to set count to 0 when context's reset changes

//import { useContext } from "react";
import Button from "./Button";
import { SumProvider } from "./SumContext";
import MainButton from "./MainButton";
import ResetButton from "./ResetButton";

function ButtonSum() {
  return (
    <SumProvider>
      <div>
        <MainButton />
        <div>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
        <ResetButton />
      </div>
    </SumProvider>
  );
}
export default ButtonSum;
