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
