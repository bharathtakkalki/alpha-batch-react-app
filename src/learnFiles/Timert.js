import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


const Element = () => {
  const [tickState, setTickState] = useState("")
  function tick() {
    setTickState(new Date().toLocaleTimeString());
  }

  useEffect(() => {
    setInterval(tick, 1000);
  })
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {tickState}.</h2>
    </div>
  )
};

function Timer() {
  return <h1><Element /></h1>;
}

export default Timer;
