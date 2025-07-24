import Window from "./components/windows/Window";
import ReactMarkdown from "react-markdown";
import savepoint from "./assets/markdown/savepoint.md?raw";
import triggerHappy from "./assets/markdown/trigger-happy.md?raw";
import bubblegumBandit from "./assets/markdown/bubblegum-bandit.md?raw";
import aboutMe from "./assets/markdown/about-me.md?raw";
import whatsNew from "./assets/markdown/whats-new.md?raw";
import tamagotchi from "./assets/markdown/tamagotchi.md?raw";
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
  {
    name: "Tamagotchi",
    node: <ReactMarkdown>{tamagotchi}</ReactMarkdown>,
  },
  {
    name: "Bubblegum Bandit",
    node: <ReactMarkdown>{bubblegumBandit}</ReactMarkdown>,
  },
];

const windows = [
  <StatusBar title="Welcome!" key="title">
    <h4>Caroline Hohner</h4>
    <h5>SWE Intern @ Jump Trading | CS @ Cornell</h5>
  </StatusBar>,

  <Window title={"About Me"} key="about-me">
    <ReactMarkdown>{aboutMe}</ReactMarkdown>
  </Window>,
  <Window title={"What's New?"} key="whats-new">
    <ReactMarkdown>{whatsNew}</ReactMarkdown>
  </Window>,
  <Window title={"Projects"} key="projects">
    <Tabs content={tabsContent} />
  </Window>,
  <Window title={"Links"} key="links">
    <div>
      <ul style={{ padding: "0.5rem" }}>
        <li key="github">
          <a href="https://github.com/crhohner">Github</a>
        </li>
        <li key="linkedin">
          <a href="https://www.linkedin.com/in/caroline-hohner/">Linkedin</a>
        </li>
        <li key="itch.io">
          <a href="https://chohner.itch.io/">Itch.io</a>
        </li>
        <li key="cuair">
          <a href="https://cuair.org/imaging-systems.html">CUAir</a>
        </li>
      </ul>
    </div>
  </Window>,
];

const positions = [
  { x: 240, y: 100 },
  { x: 180, y: 100 },
  { x: 140, y: 100 },
  { x: 100, y: 100 },
  { x: 300, y: 300 },
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
    <div>
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
    </div>
  );
}

export default App;
