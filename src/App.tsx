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
import planeSystem from "./assets/markdown/plane-system.md?raw";
import { useState, useEffect } from "react";
import Draggable from "./components/Draggable";

const tabsContent = [
  {
    name: "Plane System",
    node: <ReactMarkdown>{planeSystem}</ReactMarkdown>,
  },
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

const windowConfigs = [
  {
    key: "links",
    title: "Links",
    content: (
      <ul style={{ paddingRight: "2rem", paddingLeft: "2rem" }}>
        <li>
          <a href="https://github.com/crhohner">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/caroline-hohner/">Linkedin</a>
        </li>
        <li>
          <a href="https://chohner.itch.io/">Itch.io</a>
        </li>
        <li>
          <a href="https://cuair.org/imaging-systems.html">CUAir</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1W3-c075fZuCqMQm-WMKDA8GaB7MlGKZ7/view?usp=sharing">
            Resume
          </a>
        </li>
      </ul>
    ),
  },
  {
    key: "about_me",
    title: "About Me",
    content: <ReactMarkdown>{aboutMe}</ReactMarkdown>,
  },
  {
    key: "whats_new",
    title: "What's New?",
    content: <ReactMarkdown>{whatsNew}</ReactMarkdown>,
  },
  {
    key: "projects",
    title: "Projects",
    content: <Tabs content={tabsContent} />,
  },
];

const makeDesktopIcon = (i: number, setOpenWindows: any, setZOrdering: any) => {
  const config = windowConfigs[i];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        key={config.key}
        src={config.key + ".ico"}
        height="60"
        onClick={() => {
          setOpenWindows((prev: any) => {
            const newMap = new Map(prev);
            newMap.set(config.key, true);
            return newMap;
          });
          setZOrdering((ordering: any) => {
            const newOrdering = ordering.filter((k: number) => k !== i);
            newOrdering.push(i);
            return newOrdering;
          });
        }}
      />
      <div
        style={{
          color: "white",
          fontFamily: "WindowsXP",
          fontSize: "large",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        {config.title}
      </div>
    </div>
  );
};

function App() {
  const [zOrdering, setZOrdering] = useState(
    [...Array(windowConfigs.length + 1).keys()].reverse()
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

  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile]);

  const [openWindows, setOpenWindows] = useState<Map<string, boolean>>(
    () => new Map(windowConfigs.map(({ key }) => [key, false]))
  );

  const title = (
    <StatusBar title="Welcome!" key="title">
      <h4>Caroline Hohner</h4>
      <h5> CS @ Cornell | Prev SWE Intern @ Jump Trading</h5>
    </StatusBar>
  );

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

  return (
    <div>
      {isMobile ? (
        <div className="lineup">
          {title}
          {windowConfigs.map((config) => (
            <Window
              key={config.key}
              title={config.title}
              closeWindow={undefined}
            >
              {config.content}
            </Window>
          ))}
        </div>
      ) : (
        <div>
          <div
            style={{ display: "flex", flexDirection: "row", padding: "1rem" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              {windowConfigs.map((_, i) =>
                makeDesktopIcon(i, setOpenWindows, setZOrdering)
              )}
            </div>
          </div>

          {windowConfigs.map((config, i) =>
            openWindows.get(config.key) ? (
              <Draggable
                key={config.key}
                onClick={() =>
                  setZOrdering((ordering) => {
                    const newOrdering = ordering.filter((k) => k !== i);
                    newOrdering.push(i);
                    return newOrdering;
                  })
                }
                styles={{ zIndex: zOrdering.indexOf(i) }}
              >
                <Window
                  key={config.key}
                  title={config.title}
                  closeWindow={() =>
                    setOpenWindows((prev) => {
                      const newMap = new Map(prev);
                      newMap.set(config.key, false);
                      return newMap;
                    })
                  }
                >
                  {config.content}
                </Window>
              </Draggable>
            ) : null
          )}

          {
            <Draggable
              key="title"
              onClick={() =>
                setZOrdering((ordering) => {
                  const newOrdering = ordering.filter(
                    (k) => k !== windowConfigs.length
                  );
                  newOrdering.push(windowConfigs.length);
                  return newOrdering;
                })
              }
              styles={{ zIndex: zOrdering.indexOf(windowConfigs.length) }}
            >
              {title}
            </Draggable>
          }
        </div>
      )}
      <div className="footer-container">
        <div className="footer-border"></div>
        <div className="footer-text">{time}</div>
      </div>
    </div>
  );
}

export default App;
