import { useState, useEffect } from "react";
import "./App.css";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);
  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title}</h2>
      <button
        onClick={() => {
          // alert(title);
          setHasLiked(!hasLiked);
        }}
      >
        {hasLiked ? "Liked " : "Like "}
      </button>
    </div>
  );
};

const App = () => {
  // const [hasLiked, setHasLiked] = useEffect(false);
  return (
    <>
      <div className="card-container">
        <h1>hello</h1>
        <br />
        <Card title="The loin King" />
        <Card title="Dhurandar" />
        <Card title="Avatar" />
        <Card title="The hero hanuman" />
        <Card title="Star Wars" />
      </div>
    </>
  );
};
export default App;
// ! https://www.youtube.com/watch?v=dCLhUialKPQ

// ? 44:00
