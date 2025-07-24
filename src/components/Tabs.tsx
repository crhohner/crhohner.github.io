import "xp.css/dist/XP.css";
import React, { type ReactNode, useState } from "react";

interface TabsProps {
  content: { node: ReactNode; name: string }[]; // Explicitly define children as optional ReactNode
}

const Tabs: React.FC<TabsProps> = ({ content }) => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <menu role="tablist">
        {content.map(({ name }, i) => (
          <button
            key={name}
            aria-selected={i === selected}
            aria-controls={name}
            onClick={() => setSelected(i)}
          >
            {name}
          </button>
        ))}
      </menu>
      {content.map(({ node, name }, i) => (
        <article role="tabpanel" hidden={i !== selected} id={name} key={name}>
          {node}
        </article>
      ))}
    </>
  );
};

export default Tabs;
