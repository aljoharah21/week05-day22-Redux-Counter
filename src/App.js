
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import {increment ,decrement ,reset } from "./Counter";
import { useState } from "react";

function App() {



  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      counter: state.counter.counter,
    };
  });


  return (
    <div className="App">
     
  <h1>{state.counter}</h1>
     <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>


      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>

     
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button> 





     
    </div>
  );
}

export default App;
