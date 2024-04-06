import { useState, type ReactElement } from "react";

export default function Counter(): ReactElement {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        type="button"
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
        type="button"
      >
        Decrement
      </button>
    </div>
  );
}
