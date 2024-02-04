export function Wrapper(Component) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const addText = "added text here";
    return <Component {...props} addText={addText} />;
  };
}

export function TextComponent() {
  return <WrappedText text="from parent" />;
}

function Text({ text, addText }) {
  return (
    <p>
      {text} {addText}
    </p>
  );
}

const WrappedText = Wrapper(Text);

//************************* */
//
//
// wrapper HOC takes Component as argument, and return inner arrow function, which has (props) parameter, which later will be passed to component, and creates new additional props assigned to const, and then returns component from argument which has  {...props} from parent and newProps={newProps} from wrapper <Component {...props} newProps={newProps} />

// export function TextWithStyle() {
//   return <StyledText text="inherited legacy" />;
// }

// export function withStyles(Component) {
//   // eslint-disable-next-line react/display-name
//   return (props) => {
//     const style = {
//       color: "red",
//       fontSize: "1em",
//       ...props.style,
//     };
//     return <Component {...props} style={style} />;
//   };
// }

// const Text = ({ text, style }) => (
//   <p style={{ fontFamily: "Inter", ...style }}>{text}</p>
// );
// export const StyledText = withStyles(Text);
// export const StyledText = withStyles((props) => (
//   <p style={{ fontFamily: "Inter", ...props.style }}>Hello world</p>
// ));
