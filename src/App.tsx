import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';
const reducerFun = (state:any,action:any)=> {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case "increment":
      const newState ={
        ...state,
        counter:state.counter +1,
        status:action.type
      }
      return newState
    case "decrement":
      const newState2 ={
        ...state,
        counter:state.counter - 1,
        status:action.type
      }
      return newState2
    default:
      return state
     
  }
};
const initialState = {counter:0, state: ''}
function App() {
  const [state, dispatch] = useReducer(reducerFun, initialState);
  const incrementValue =()=> {
    console.log('increment', state);
  console.log("incrementValue");
  dispatch({ type:'increment' });
  }
   const decrementValue =()=> {
    console.log('decrement', state);
    console.log("decrementValue");
    dispatch({type:'decrement'});
  }
  

  return (
    <div>
      <br />
       Counter = {state.counter} 
      <br />
       status = {state.status} 
      <br />
      <button type="button" onClick={incrementValue}>increment</button>
      <button type ="button" onClick={decrementValue}>decrement</button>
    </div>
  );
}

export default App;
