import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { useState } from "react";
import ExpandableText from "./components/ExpandableText";
function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Peperroni",
    toppings: ["Mushroom"],
  });
  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  return (
    <div className="App">
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi
        animi provident quae iusto esse beatae culpa corrupti, vel architecto
        possimus consectetur quis ad doloribus amet veniam fuga nostrum in, sunt
        blanditiis dicta nobis! Sunt maiores magni quo, optio dolorem in
        temporibus est! Porro, iusto? Deserunt consectetur maxime aut provident.
      </ExpandableText>
    </div>
  );
}

export default App;
