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
// are used on top-level in compoent function. (not in regular function or nested function)
//-------------------------------
//-------------------------------
// 1. useState hook - the purpose of useState hook is to handle reactive data. Any data that changes in the application is called "state". whenevr state changes,react updates/re-renders UI to apply latest changes.
// useState takes one argument - useState(0) - which is initial state. funciton  returns array, which contains 2 variable named anything & setAnything - 'reactive value' and 'setter' function. they are used in component
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
//useEffect can return function which will run after component unmount
