"use client";

import Model from "./model";
import { Canvas } from "@react-three/fiber";

export default function Preview({ path }) {
  return (
    <Canvas>
      <Model path={path} />
      <ambientLight intensity={4} />
    </Canvas>
  );
}

//add auto rotate on select (maybe? or keep controls)
//get rid of orbital controls when not selected
