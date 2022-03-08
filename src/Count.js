import React, {useState} from 'react';
import './App.css';
import { useDispatch,useSelector } from "react-redux";

function Count() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <div>
      count={count}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export default Count;
