
import React from "react";
import Child from "./Child";

function Parent() {
  const name = "Alice";
  const age = 25;

  return (
    <div>
      <h1>Parent Component</h1>
      <Child name={name} age={age} />
    </div>
  );
}

export default Parent;