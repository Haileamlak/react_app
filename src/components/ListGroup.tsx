import { useState } from "react";

function ListGroup() {
    const items = ["faith", "Hope", "Love"];
    let [index, setIndex] = useState(-1);

  return (
    <>
      <h1>List </h1>
      <ul className="list-group">
        {items.map((item, i) => (
            <li className={index === i ? "list-group-item active" : "list-group-item "} onClick={() => { setIndex(i) }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
