import { useState } from "react";

function MyButton({ count, onClick }: { count: number; onClick: () => void }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
