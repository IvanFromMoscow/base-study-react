import React from 'react'
import { useState } from 'react'

const Counter = function() {
    const [count, setCount] = useState(0);
    // const state = useState(1); console.log(state) // useState return Array -> 2 elems: 0: value, 1: function dispatchSetState()

    function handleIncrement() {
        setCount(count + 1); 
      }
    
      function handleDecrement() {
        setCount(count - 1); 
      }

    return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Increment</button>
    </div>
  )
}

export default Counter