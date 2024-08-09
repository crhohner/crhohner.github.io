"use client";
import { useState } from "react";
import Image from "next/image";
/*import Rotatable from "./rotatable";
import Preview from "./preview";*/

export default function Carousel({ projects }) {
  const [index, setIndex] = useState(Math.floor(projects.length / 2));

  function moveIndex(right) {
    var nextIndex = index;
    nextIndex = right ? index + 1 : index - 1;
    if (nextIndex < 0) {
      nextIndex = projects.length - 1;
    }
    if (nextIndex > projects.length - 1) {
      nextIndex = 0;
    }
    setIndex(nextIndex);
  }

  //const models = projects.map((project) => <Rotatable path={project.path} />);
  const models = projects.map((project) => (
    <Image
      src={project.path}
      key={project.name}
      height={300}
      width={300}
      alt={project.name}
    />
  ));

  return (
    <div style={{ paddingBottom: "4rem" }}>
      <div className="center">
        <div className="carousel">
          <div className="cell">
            {" "}
            <button onClick={() => moveIndex(false)}>{" < "}</button>
          </div>

          <div className="cell">
            <div className="center">{models[index]}</div>
          </div>

          <div className="cell">
            {" "}
            <button onClick={() => moveIndex(true)}>{" > "}</button>
          </div>
        </div>
      </div>

      <div className="center">
        <div className="details">
          <h>{projects[index].name}</h>
          <p>{projects[index].description}</p>
          <p>{index + 1 + "/" + projects.length}</p>
        </div>
      </div>
    </div>
  );
}
