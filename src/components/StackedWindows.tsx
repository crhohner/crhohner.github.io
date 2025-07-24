import "xp.css/dist/XP.css";
import React, { type ReactNode, useState } from "react";

interface StackedWindowsProps {
  children: ReactNode[]; // Explicitly define children as optional ReactNode
}

const StackedWindows: React.FC<StackedWindowsProps> = ({ children }) => {
  const [zOrdering, setZOrdering] = useState(children.map((_, i) => i));

  return (
    <div style={{ position: "relative" }}>
      {children.map((child, i) => {
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 60 * i - 150,
              top: 80 * i,
              zIndex: zOrdering.indexOf(i),
            }}
            onClick={() =>
              setZOrdering((ordering) => {
                const new_ordering = ordering.filter((k) => k != i);
                new_ordering.push(i);
                return new_ordering;
              })
            }
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default StackedWindows;
