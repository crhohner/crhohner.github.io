import Window from "./components/windows/Window";
import ReactMarkdown from "react-markdown";
import savepoint from "./assets/projects/savepoint.md?raw";
import triggerHappy from "./assets/projects/trigger-happy.md?raw";
// import Footer from "./components/Footer";
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
  <StatusBar title="Caroline Hohner">
    SWE Intern @ Jump Trading | CS @ Cornell
  </StatusBar>,

  <Window title={"Test Window"}>
    <ReactMarkdown>{savepoint}</ReactMarkdown>
  </Window>,
  <Window title={"Test Window"}>
    <ReactMarkdown>{triggerHappy}</ReactMarkdown>
  </Window>,
  <Window title={"Projects"}>
    <Tabs content={tabsContent} />
  </Window>,
];

function App() {
  const [zOrdering, setZOrdering] = useState(windows.map((_, i) => i));

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
                console.log("click!");
                return new_ordering;
              })
            }
            styles={{ zIndex: zOrdering.indexOf(i) }}
            initial_x={50 + 60 * i}
            initial_y={50 * i}
          >
            {window}
          </Draggable>
        ))
      )}
    </body>
  );
}

export default App;
