"use client";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model({ path, ...props }) {
  var { nodes, materials } = useLoader(GLTFLoader, path);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh.geometry} material={materials.main} />
    </group>
  );
}

//every material NEEDS to have the same name "main" if this
//is how i'm handling the loads
