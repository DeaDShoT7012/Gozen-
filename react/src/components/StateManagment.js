import React, { useState } from "react";

function StateManagment() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <b>StateManagment</b>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default StateManagment;
