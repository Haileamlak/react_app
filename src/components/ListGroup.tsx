import { useState } from "react";

interface Props{
    items: string[];
    heading: string;
    onSelect: () => void;
}
function ListGroup({items, heading}:Props) {
  let [index, setIndex] = useState(-1);

  return (
    <>
      <h1>{heading} </h1>
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className={
              index === i ? "list-group-item active" : "list-group-item "
            }
            onClick={() => {
              setIndex(i);
              onselect;
            }}
          >
            {item}
          </li>
        ))}
          </ul>
    </>
  );
}

export default ListGroup;
