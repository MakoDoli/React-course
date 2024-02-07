import { useReducer } from "react";

export default function WithReducer() {
  const initialState = 0;

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return (state += action.payload);

      case "decrement":
        return { ...state, count: state.count - action.payload };
      default:
        state.count;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <button
      onClick={() => {
        dispatch({ type: "increment", payload: 2 });
      }}
    >
      {state}
    </button>
  );
}
