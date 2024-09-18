import Carousel from "../components/carousel";

export default function Home() {
  const intro1 =
    "My name is Caroline Hohner. I'm a junior studying computer science with a minor " +
    "in game design at Cornell University in the College of Arts and Sciences. ";
  const intro2 =
    "I interned at W. W. Grainger this past summer, where I" +
    " worked on a full-stack team developing an internal tool. At school, I lead a weekly support course for my " +
    "department's functional programming course.";

  const intro3 =
    "In my free time, I'm a developer for Cornell University Unmanned Air Systems (CUAir) " +
    "and a member of and public relations co-chair for the Cornell University Figure Skating Club's competition team.";

  const projects = [
    {
      name: "Bubblegum Bandit: Action Platformer",
      description:
        "Semester-long project for Cornell's 3152: Intro to Game Development. Bubblegum Bandit was developed by a team of eight including programmers, " +
        "artists, and UI/UX designers. The game was written using LibGDX, a Java game development framework. " +
        "Bubblegum Bandit is available to play on Steam and was presented at the 2024 PAX East convention.",

      path: "/bandit.png",
    },

    {
      name: "Rummikaml: CLI Rummikub in OCaml",
      description:
        "CLI adaptation of the classic board game Rummikub written in OCaml." +
        "The game supports up to six players, which may include up to five CPUs. " +
        "Rummikaml was developed by a team of four as a capstone project for Cornell's CS3110: Data Structures and Functional Programming.",
      path: "/rummikaml.png",
    },
    {
      name: "UAV Camera + Gimbal Control",
      description:
        "An embedded system written in Rust which controls the on-board camera and gimbal for Cornell University " +
        "Unmanned Air Systems' VTOL drone. The system, which runs on a Raspberry Pi 4, " +
        "handles the image capture protocol for the team's computer vision pipeline. It can be operated via either" +
        " a command line interface or custom REST API.",
      path: "/plane-system.png",
    },
    {
      name: "Critter World: Evolution Simulator",
      description:
        'Simulates an ecology composed of "critters": agents driven by ' +
        "rulesets written in a custom scripting language. The rulesets, implemented as abstract syntax trees, " +
        "act in place of genetic code, mutate through generations, and " +
        "combine during reproduction. Critter World was developed for Cornell's 2112: " +
        "Honors Object-Oriented Design and Data Structures.",
      path: "/critters.png",
    },
    {
      name: "Savpoint: Final Fantasy VII Build Manager",
      description:
        "Allows FFVII fans to save, manage," +
        " and share their party setups for the original game and the Remake triology! " +
        "Built with Supabase and Next.js. This is a work in progress, so I don't have a domain yet.",
      path: "/savepoint.png",
    },
    {
      name: "Winging It: Magpie Flight Simulator",
      description:
        "Simulates RC flight, flavored as a magpie soaring around the Colorado mountains. Built in Unity. All models/animations" +
        " made by myself in Blender. Winging It was made for Cornell's Development in Games Association's Winter 2024 Jam.",
      path: "/magpie.png",
    },
  ];
  return (
    <>
      <title>Home</title>
      <h>Projects</h>
      <br />
      <Carousel projects={projects} />

      <h>Welcome!</h>
      <p>{intro1}</p>
      <p>{intro2}</p>
      <p>{intro3}</p>
      <br />
      <br />
      <h>Skills</h>
      <div className="container">
        <h>Languages</h>
        <p>
          Java, Python, C#, JavaScript, TypeScript, HTML/CSS, Rust, OCaml,
          Kotlin, PostgreSQL
        </p>
      </div>
      <div className="container">
        <h>Frameworks</h>
        <p>React, Next.js</p>
      </div>
      <div className="container">
        <h>Developer Tools</h>
        <p>
          Git, Kubernetes, Docker, VS Code, IntelliJ, Unity, Adobe Creative
          Suite, Agile Development
        </p>
      </div>
    </>
  );
}

//page content with images
//make favicon
//make descriptions

//blog implementation
//consider whether 3d is worth..
//bring back to landing page
