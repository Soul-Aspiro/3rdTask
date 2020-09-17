import React, { useState } from "react";

function StateLess(props) {
  const [count, chCount] = useState(0);
  const setCount = () => {
    chCount(count + 1);
  };
  return (
    <div className="Details">
      <h1>{props.name}</h1>
      <p>{props.comment}</p>
      <h2>No of Clicks {count}</h2>
      <button onClick={setCount}>Click To increase Clicks</button>
    </div>
  );
}
export default StateLess;
