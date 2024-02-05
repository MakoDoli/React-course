/* eslint-disable react/prop-types */
import React from "react";

const FlyOutContext = React.createContext({
  open: false,
  setOpen: () => {},
  value: "",
  setValue: () => {},
  toggle: () => {},
});

export function FlyOut(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const toggle = React.useCallback(() => setOpen((state) => !state), []);

  return (
    <FlyOutContext.Provider value={{ open, toggle, value, setValue }}>
      <div>{props.children}</div>
    </FlyOutContext.Provider>
  );
}

function Input(props) {
  const { value, toggle } = React.useContext(FlyOutContext);

  return <input onFocus={toggle} onBlur={toggle} value={value} {...props} />;
}

function List({ children }) {
  const { open } = React.useContext(FlyOutContext);

  return open && <ul>{children}</ul>;
}

function ListItem({ children, value }) {
  const { setValue } = React.useContext(FlyOutContext);

  return <li onMouseDown={() => setValue(value)}>{children}</li>;
}

FlyOut.Input = Input;
FlyOut.List = List;
FlyOut.ListItem = ListItem;
