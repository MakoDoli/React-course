import React, { useState } from "react";
// class component

// eslint-disable-next-line no-unused-vars
class BtnOld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return <p>{this.state.count}</p>;
  }
}

// functional component

// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
function NewBtn() {
  const [state] = useState({ count: 0 });
  return <p>{state.count}</p>;
}

//******************** */
//    HOOKS
//
// always start with 'use'
// are used on top-level in component function. (not in regular function or nested function)
//-------------------------------
//-------------------------------
// 1. useState hook - the purpose of useState hook is to handle reactive data. Any data that changes in the application is called "state". whenevr state changes,react updates/re-renders UI to apply latest changes.
// useState takes one argument - useState(0) - which is initial state. function  returns array, which contains 2 variable named anything & setAnything - 'reactive value' and 'setter' function. they are used in component
//-------------------------------
//------------------------------
// 2. useEffect hook -
//   component life-cycle:
// a) componentDidMount(){
//   initialized; happens once
//}//(((((empty dependencies array)))))
//  b) componentDidUpdate(){}
//     state updated, can happen multiple times
// (((((( states in dependencies array))))))
// c) componentWillUnmount(){}
// (((((((((( returned function))))))))))

// useEffect is a function that takes other function (defined by developer) as argument. It runs when DOM or state is updated. to not fall in infinite loop (if useEffect updates state, then updated state will run useEffect again which will updat state again --> loop) useEffect takes 2nd argument - dependencies array
// we can add any state in dependencies array and react will track this state and run useEffect function (update component) on state's change
//useEffect can return "cleanup" function which will run before (or after?) component unmount. If component renders multiple times, the previous effect is cleand up before executing next effect
//-----------------------------------
//------------------------------
// 3. useContext hook - allows to work with react's Context API, which is sharing data without props, in other words, to share and scope values throughout components tree.
// First we create CurrentObjContext with createContext(currentObj), then we wrap all those components in <CurrentObjContext.Provider> whose children should use this context 'value={ currentContext.key} </CurrentObjContext.Provider>
// We can import context directly without provider if we dont need specific 'value={smth}' from parent
//---------------------------
//----------------------------
// useRef - create/store immutable object and keep same reference between re-renders. if we store value in useRef and then increase it(useRef.current) by button click, updated number won't be updated in UI because no re-render happnes. but if re-render happens because of other state update, then useRef.current will display current/updated value
//we can store/reference html element in useRef.current
//-----------------------------
//----------------------------
//useReducer -is also involved in state managment, but instead of directly updating state, we dispatch actions that go to reducer function, and then reducer function defines how to compute next state. useReducer takes two arguments - reducer function, and initial state (usually object)
//reducer function takes two arguments - dispatch action and payload. action is an object: action.type is a type inside dispatch function {type: "string"} and action.payload is any value inside dispatch funciton {type: "string", payload: "I'm payload"} we want to use in updating state
//-----------------------------
//-----------------------------
// useMemo - is a hook that allows us to memoize expensive computation within our function component. useMemo can take callback function and dependency array as argument. callback will only execute if dependency array changes
//----------------------------
//---------------------------
// React.memo differs from useMemo - its a higher-order component HOC which takes component and its props as arguments and handles memoization based on props (if props change,component re-renders, else component is memoized and doesn't render)
//------------------------------
//------------------------------
//useCallBack - is a hook that allows to memoize function to avoid its re-creation through re-renders. It is useful if memoized function is passed to children
//-----------------------------
//-----------------------------
//useLayouteffecte hook - the callbakc function in this hook will run after component renders but before actually painting it to screen, or, screen wont be painted untill useLayoutEffect callback function finishes execution
//---------------------------
//----------------------------
// useDebugValue - will display value in dev tools component
//-----------------------------
//---------------------------

//**************************** *********************/
//          JSX

// If we need to return several jsx element in each map() item, we wrap them in <Fragment>to pass key

/*import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);*/
//*************************************** */
// React components must be pure functions
// Event handlers (onClick) propagate events up to the parent. both child and parent event handler will be triggered
// use e.stopPropagation() to prevent
// onClickCapture runs code on 'capture' phase, which means code first runs in parent element. as React doesnt support 'capture' phase unlike traditional DOM bubling
//********************************* */
///   EVENT   handlers

/* You can handle events by passing a function as a prop to an element like <button>.
Event handlers must be passed, not called! onClick={handleClick}, not onClick={handleClick()}.
You can define an event handler function separately or inline.
Event handlers are defined inside a component, so they can access props.
You can declare an event handler in a parent and pass it as a prop to a child.
You can define your own event handler props with application-specific names.
Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.
Explicitly calling an event handler prop from a child handler is a good alternative to propagation.*/
