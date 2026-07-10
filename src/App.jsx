import "./App.css";

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className="card-container">
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

// ? 25:25
