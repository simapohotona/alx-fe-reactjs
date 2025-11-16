import { useState } from "react";

function MainContent() {
  const [count, setCount] = useState(0);

  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: "#f4f4f4",
        color: "#333",
      }}
    >
      <h2>Task 1: Using State in React</h2>
      <p>Current Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: "navy",
          color: "white",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Increase
      </button>
    </main>
  );
}

export default MainContent;
