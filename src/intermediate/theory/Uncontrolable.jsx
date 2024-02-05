import { useRef } from "react";

export default function Uncontrolable() {
  const inputRef = useRef(null);
  const input2Ref = useRef(null);
  function handleClick() {
    console.log(inputRef.current.value);
  }
  function handleSubmit() {
    console.log(`Value from form's input ${input2Ref.current.value}`);
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>click</button>
      <form onSubmit={handleSubmit}>
        <input ref={input2Ref} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
