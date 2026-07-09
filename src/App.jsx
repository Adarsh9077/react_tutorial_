import "./App.css";

const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h2>Arrow Function</h2>
      <br />
      <Card title="The loin King" />
      <Card title="Dhurandar" />
      <Card title="Avatar" />
      <Card title="The hero hanuman" />
      <Card title="Star Wars" />
    </>
  );
};
export default App;
// ! https://www.youtube.com/watch?v=dCLhUialKPQ

// ? 22:20
