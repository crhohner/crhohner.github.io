import StackedWindows from "./components/StackedWindows";
import Window from "./components/windows/Window";
import ReactMarkdown from "react-markdown";
import savepoint from "./assets/projects/savepoint.md?raw";
import triggerHappy from "./assets/projects/trigger-happy.md?raw";
// import Footer from "./components/Footer";
import Tabs from "./components/Tabs";
import StatusBar from "./components/windows/StatusBar";
// import "xp.css/dist/XP.css";

function App() {
  const tabsContent = [
    { name: "Savepoint", node: <ReactMarkdown>{savepoint}</ReactMarkdown> },
    {
      name: "Trigger Happy",
      node: <ReactMarkdown>{triggerHappy}</ReactMarkdown>,
    },
  ];

  return (
    <>
      <body>
        <StatusBar title="Caroline Hohner">
          SWE Intern @ Jump Trading | CS @ Cornell
        </StatusBar>
        <main>
          <StackedWindows>
            <Window title={"Test Window"}>
              <ReactMarkdown>{savepoint}</ReactMarkdown>
            </Window>
            <Window title={"Test Window"}>
              <ReactMarkdown>{triggerHappy}</ReactMarkdown>
            </Window>
            <Window title={"Projects"}>
              <Tabs content={tabsContent} />
            </Window>
          </StackedWindows>
        </main>
        {/* <Footer /> */}
      </body>
    </>
  );
}

export default App;
