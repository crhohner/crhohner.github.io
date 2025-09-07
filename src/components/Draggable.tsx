import { type ReactNode, useRef, useState, useEffect } from "react";
import { useDraggable } from "@reactuses/core";

interface DraggableProps {
  children: ReactNode;
  styles: any;
  onClick: any;
}

export default function Draggable({
  children,
  styles,
  onClick,
}: DraggableProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [initialPosition, setInitialPosition] = useState({
    x: window.innerWidth * 0.3,
    y: window.innerHeight * 0.1,
  });
  useEffect(() => {
    setInitialPosition({
      x: window.innerWidth * 0.3,
      y: window.innerHeight * 0.1,
    });
  }, []);

  const [x, y] = useDraggable(ref, {
    initialValue: initialPosition,
    preventDefault: true,
  });

  return (
    <div
      ref={ref}
      style={{
        ...styles,
        position: "fixed",
        touchAction: "none",
        left: x,
        top: y,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
