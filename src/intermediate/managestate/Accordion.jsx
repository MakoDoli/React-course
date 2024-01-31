/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

export default function Accordion() {
  const [active, setActive] = useState(null);
  return (
    <div>
      Accordion
      <Panel active={active === 0} title="About" setActive={() => setActive(0)}>
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        active={active === 1}
        title="Etimiology"
        setActive={() => setActive(1)}
      >
        The name comes from алма, the Kazakh word for "apple" and is often
        translated as "full of apples"..
      </Panel>
    </div>
  );
}

function Panel({ title, active, setActive, children }) {
  return (
    <div>
      <h1> {title}</h1>
      {active ? <p>{children}</p> : <button onClick={setActive}>show</button>}
    </div>
  );
}
