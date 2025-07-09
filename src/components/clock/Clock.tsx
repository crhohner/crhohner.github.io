import { useState, useEffect } from "react";
import "./clock.css";

export default function Clock() {
  const [time, setTime] = useState("00:00");
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div className="clock">{time}</div>;
}
