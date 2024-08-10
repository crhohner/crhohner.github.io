import Carousel from "../../components/carousel";

export default function Page() {
  const loremIpsum =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" +
    "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim" +
    "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea" +
    "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" +
    "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint" +
    "occaecat cupidatat non proident, sunt in culpa qui officia deserunt" +
    " mollit anim id est laborum.";

  const projects = [
    {
      name: "Bubblegum Bandit: Action Platformer",
      description:
        "Semester-long project for Cornell's 3152: Intro to Game Development. Bubblegum Bandit was developed by a team of eight including programmers, " +
        "artists, and UI/UX designers. The game was written using LibGDX, a Java game development framework. " +
        "Bubblegum Bandit is available to play on Steam " +
        "and was presented at the 2024 PAX East convention.",

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
    /*{
      name: "Phoenix Down: Full Stack Web App",
      description: "",
      path: ""
    },*/
  ];
  return (
    <>
      <title>Home</title>

      <Carousel projects={projects} />

      <h>Welcome!</h>
      <p>{loremIpsum}</p>
      <div className="container">
        <h>Skills</h>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
