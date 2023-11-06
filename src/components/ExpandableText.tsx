import { ReactNode, useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}
function ExpandableText({ children, maxChar = 10 }: Props) {
  const [expanded, setExpanded] = useState(children.length <= maxChar);
  const text = expanded ? children : children.substring(0, maxChar);

  return (
    <>
      <p>
        {text}...{" "}
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Less" : "More"}
        </button>
      </p>
    </>
  );
}

export default ExpandableText;
