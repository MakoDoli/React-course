import React, { Children } from "react";

const Section = React.createElement("div", [{ id: "elem" }], [...Children]);

const comps = {
  Header: () => {},
  Footer: () => {},
};

function App3() {
  return (
    <Section>
      <comps.Header />
    </Section>
  );
}
export default App3;
