import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John"
  //   }
  // });

  // const handleClick = () => {
  //   setGame({ ...game, player: { ...game.player, name: "Bob" } });
  // }

  const [pizza, setPizza] = useState({
    name: "Spicy Peperroni",
    toppings: ["Mushroom"],
  });
  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  }

  return (
    <div className="App">
      <h1>My First React App</h1>
      <ListGroup
        items={items}
        heading="But Love is greater than all"
        onSelect={() => {
          console.log("You Clicked!");
        }}
      ></ListGroup>
      <Alert>this is alert</Alert>
    </div>
  );
}

export default App;
