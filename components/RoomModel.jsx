'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function RoomModel(props) {
  const { nodes, materials } = useGLTF('/assets/3dModels/gaming_room-v2.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.PaletteMaterial003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_80.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_94.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_96.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_125.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_126.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.001']}
          position={[-6.996, 0.867, -2.096]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.PaletteMaterial001}
          position={[-9.802, 2.298, -0.603]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.PaletteMaterial002}
          position={[-9.825, 2.268, -1.073]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials.PaletteMaterial003}
          position={[-7.799, 1.481, -2.123]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[2.151, 0.031, 1.454]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_69.geometry}
          material={materials.PaletteMaterial004}
          position={[-9.916, 1.481, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[2.151, 0.031, 1.454]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/3dModels/gaming_room-v2.glb')
