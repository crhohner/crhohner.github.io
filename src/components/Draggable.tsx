import { type ReactNode, useRef, useState, useEffect } from "react";
import { useDraggable } from "@reactuses/core";

interface DraggableProps {
  children: ReactNode;
  initial_x: number;
  initial_y: number;
  styles: any;
  onClick: any;
}

export default function Draggable({
  children,
  initial_x,
  initial_y,
  styles,
  onClick,
}: DraggableProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [initialPosition, setInitialPosition] = useState({
    x: initial_x,
    y: initial_y,
  });
  useEffect(() => {
    setInitialPosition({ x: initial_x, y: initial_x });
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
