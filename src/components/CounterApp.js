
import React, { useState } from 'react';

function CounterApp(){
    const [count, setCount] = useState(0);
    return (
      <>
      <h3>Counter App </h3>
      <button onClick={()=> setCount(count + 1)}>+</button>
       <p>{count}</p>
       <button onClick={()=> setCount(count - 1)}>-</button>
       <hr />
      </>
  
    );
  }
  
  export default CounterApp;