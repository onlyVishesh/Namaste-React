import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  useEffect(()=>{
    // api call
  })
  return (
    <div className="user-card">
      <h3>Name : {name}</h3>
      <p>Hey this is test file to learn about class based component</p>
      <p>You have clicked {count} times</p>
      <button
        className="dummy-btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default User;
