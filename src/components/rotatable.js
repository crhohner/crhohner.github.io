"use client";

import Model from "./model";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Rotatable({ path }) {
  return (
    <Canvas>
      <OrbitControls
        enableDamping={true}
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.3}
      />
      <Model path={path} />
    </Canvas>
  );
}

//add auto rotate on select (maybe? or keep controls)
//get rid of orbital controls when not selected
