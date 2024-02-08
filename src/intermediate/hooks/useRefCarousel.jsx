import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function CatFriends() {
  const selectedRef = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <nav style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              flushSync(() => {
                if (index < catList.length - 1) {
                  setIndex(index + 1);
                } else {
                  setIndex(0);
                }
              });
              selectedRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
            }}
          >
            Next
          </button>
        </nav>
        <div>
          <ul style={{ display: "inline", whiteSpace: "nowrap" }}>
            {catList.map((cat, i) => (
              <li
                style={{ display: "inline", whiteSpace: "nowrap" }}
                key={cat.id}
                ref={index === i ? selectedRef : null}
              >
                <img
                  className={index === i ? "active" : ""}
                  src={cat.imageUrl}
                  alt={"Cat #" + cat.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}

export function StoreValue() {
  const [render, setRender] = useState(false);
  let stored = 23;

  const storedInRef = useRef(0);
  console.log("Let from function body: " + stored);
  console.log("Ref from function body: " + stored);

  return (
    <div
      style={{
        borderRadius: 8,
        width: 200,
        height: 270,
        padding: 20,
        background: "lightblue",
        marginTop: 25,
      }}
    >
      <button
        onClick={() => {
          stored = stored + 1;
          console.log("Let from button: " + stored);
        }}
      >
        {" "}
        increase let{" "}
      </button>
      <button
        onClick={() => {
          storedInRef.current += 1;
          console.log("Ref from button: " + storedInRef.current);
        }}
      >
        {" "}
        increase ref{" "}
      </button>
      <Text num={stored} refNum={storedInRef.current} />
      <button onClick={() => setRender(!render)}> render! </button>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Text({ num, refNum }) {
  return (
    <>
      {" "}
      <p>stored in let {num}</p>
      <p>stored in ref {refNum}</p>
    </>
  );
}
