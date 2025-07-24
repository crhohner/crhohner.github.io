import Window from "./components/windows/Window";
import ReactMarkdown from "react-markdown";
import savepoint from "./assets/markdown/savepoint.md?raw";
import triggerHappy from "./assets/markdown/trigger-happy.md?raw";
import aboutMe from "./assets/markdown/about-me.md?raw";
import whatsNew from "./assets/markdown/whats-new.md?raw";
import Tabs from "./components/Tabs";
import StatusBar from "./components/windows/StatusBar";
import { useState, useEffect } from "react";
import Draggable from "./components/Draggable";

const tabsContent = [
  { name: "Savepoint", node: <ReactMarkdown>{savepoint}</ReactMarkdown> },
  {
    name: "Trigger Happy",
    node: <ReactMarkdown>{triggerHappy}</ReactMarkdown>,
  },
];

const windows = [
  <StatusBar title="Welcome!">
    <h4>Caroline Hohner</h4>
    <h5>SWE Intern @ Jump Trading | CS @ Cornell</h5>
  </StatusBar>,

  <Window title={"About Me"}>
    <ReactMarkdown>{aboutMe}</ReactMarkdown>
  </Window>,
  <Window title={"What's New?"}>
    <ReactMarkdown>{whatsNew}</ReactMarkdown>
  </Window>,
  <Window title={"Projects"}>
    <Tabs content={tabsContent} />
  </Window>,
];

const positions = [
  { x: 240, y: 100 },
  { x: 180, y: 100 },
  { x: 140, y: 100 },
  { x: 100, y: 100 },
];

function App() {
  const [zOrdering, setZOrdering] = useState(
    windows.map((_, i) => i).reverse()
  );

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <body>
      {isMobile ? (
        <div className="lineup">{windows}</div>
      ) : (
        windows.map((window, i) => (
          <Draggable
            key={i}
            onClick={() =>
              setZOrdering((ordering) => {
                const new_ordering = ordering.filter((k) => k != i);
                new_ordering.push(i);
                return new_ordering;
              })
            }
            styles={{ zIndex: zOrdering.indexOf(i) }}
            initial_x={positions[i].x}
            initial_y={positions[i].y}
          >
            {window}
          </Draggable>
        ))
      )}
    </body>
  );
}

export default App;
