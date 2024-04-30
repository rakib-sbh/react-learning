import Card from "./components/Card/Card";
import "./App.css";
import data from "./data/data.json";

const App = () => {
  const items = data.map((item, index) => (
    <Card titleText={item.title} key={index} />
  ));
  return (
    <div>
      <h1 className="todo">TODO APP</h1>
      {items}
    </div>
  );
};

export default App;
