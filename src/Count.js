import React, {useState} from 'react';
import './App.css';
import { useDispatch,useSelector } from "react-redux";
import { increment } from './counterslice';

function Count() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div>
      count={count}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default Count;
