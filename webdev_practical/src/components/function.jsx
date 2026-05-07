
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

import React from "react";

function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Child;

import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Users;
