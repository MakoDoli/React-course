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

//If parent props and wrapper HOC props have same name, PARENT takes over

// We can pass anything as second argument (in additiona to component argumnet) and use it inside inner function to define additional props

//***************** */
//    example
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
//************************ */

//   HOC wrapper example with fetch

/* import { LoadingSpinner } from '../components/LoadingSpinner';

export default function withLoader(Element, url) {
  return  (props) =>  {
  
const [data, setData] = useState(null)
const [error, setError] = useState(null)
const [loading, setLoading] = useState (true)
    async function fetchData(){
      try{
        const res = await fetch(url)
const data = await res.json()
setData(data)

      }catch(err) {
setError(err)
      }finally {
        setLoading(false)
      }
      if (loading){
        return <LoadingSpinner />
      }
      if (error){
        return <div> Error {error} </div>
      }
      return <Element {...props} data={data} />
    }
    
  };
} */
