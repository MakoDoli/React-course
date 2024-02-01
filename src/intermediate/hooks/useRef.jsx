import { useState, useRef, forwardRef, useImperativeHandle } from "react";
//************************ */

// DO NOT MODIFY DOM controlled by react state

// passing refto nested component, way to access child's node from parent with ref

// eslint-disable-next-line react/display-name
const NestedComponent = forwardRef((ref) => {
  const realRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      realRef.current.focus();
    },
  }));
  return <input ref={ref} />;
});

export default function UseHook() {
  const [text, setText] = useState("");

  const ref = useRef(text);

  const inputRef = useRef(null);

  function handleSend() {
    setTimeout(() => {
      alert("Sending: " + ref.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          ref.current = e.target.value;
        }}
      />
      <button onClick={handleSend}>Send</button>
      <NestedComponent ref={inputRef} />
    </>
  );
}
