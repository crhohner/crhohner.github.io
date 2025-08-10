import "xp.css/dist/XP.css";
import React, { type ReactNode } from "react";

interface StatusBarProps {
  title: string;
  children?: ReactNode; // Explicitly define children as optional ReactNode
}

const StatusBar: React.FC<StatusBarProps> = ({ title, children }) => {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
      </div>
      <div className="window-body" style={{ padding: "0.5rem" }}>
        {children}
      </div>
      <div className="status-bar">
        <p className="status-bar-field">Spring 2026 Grad</p>
      </div>
    </div>
  );
};

export default StatusBar;
