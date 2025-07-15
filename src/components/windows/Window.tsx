import "xp.css/dist/XP.css";
import React, { type ReactNode } from "react";

interface WindowProps {
  title: string;
  children?: ReactNode; // Explicitly define children as optional ReactNode
}

const Window: React.FC<WindowProps> = ({ title, children }) => {
  return (
    <div className="window" style={{ width: "300px" }}>
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
};

export default Window;
