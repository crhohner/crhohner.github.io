import "xp.css/dist/XP.css";
import React, { type ReactNode } from "react";

interface WindowProps {
  title: string;
  children?: ReactNode;
  closeWindow: undefined | (() => void);
}

const Window: React.FC<WindowProps> = ({ closeWindow, title, children }) => {
  return (
    <div className="window" style={{ maxWidth: 500 }}>
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={closeWindow}></button>
        </div>
      </div>
      <div
        className="window-body"
        style={{ padding: "0.5rem", maxHeight: 500, overflowY: "auto" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Window;
