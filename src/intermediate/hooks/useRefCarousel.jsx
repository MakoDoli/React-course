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
