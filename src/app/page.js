import Carousel from "../components/carousel";

export default function Home() {
  //set up object with rotateable + description for each project, pass into carousel

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
      name: "project one",
      description:
        "Seven seconds to the end. Time enough for you, perhaps... >:3",

      path: "/gorgorgorl.png",
    },
    {
      name: "project two",
      description:
        "sometimes i like to make myself peanut butter, honey, and banana sandwiches",
      path: "/emoji.png",
    },
    {
      name: "project three",
      description: "hehehhe",
      path: "/plush.png",
    },
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

// "/<file>.glb" for paths for rotateables
