'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function RoomModel(props) {
  const { section } = props
  const { nodes, materials } = useGLTF('/assets/3dModels/RoomModel-v1.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[6, 0, 0]}
        // rotation={section === 0 ? 0 : -Math.PI / 2}
        // scale={section < 2 ? 1.5 : 0}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.001']}
          position={[0.81, 0.9, -2.25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.PaletteMaterial001}
          position={[-1.99, 2.33, -0.75]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.PaletteMaterial002}
          position={[-2.01, 2.3, -1.22]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials.PaletteMaterial003}
          position={[0.01, 1.51, -2.27]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[2.15, 0.03, 1.45]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_69.geometry}
          material={materials.PaletteMaterial004}
          position={[-2.11, 1.51, -0.15]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[2.15, 0.03, 1.45]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['Material.001']}
        />
        {/* //.. */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6_1.geometry}
          material={materials['Material.001']}
        />
        {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials['Material.001']}
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
        /> */}
      </group>
    </group>
  )
}

useGLTF.preload('/assets/3dModels/RoomModel-v1.glb')
