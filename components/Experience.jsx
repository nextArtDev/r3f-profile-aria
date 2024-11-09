'use client'
import {
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from '@react-three/drei'
import React from 'react'
import { AriModel } from './AriModel'
import { Leva, useControls } from 'leva'
import RoomModel from './RoomModel'

function Experience() {
  const { animation } = useControls({
    animation: {
      value: 'Gaming',
      options: ['Gaming', 'Standing', 'Falling'],
    },
  })
  return (
    <>
      <OrbitControls />
      {/* <Sky /> */}
      <ambientLight intensity={5} />
      {/* <Environment preset="sunset" /> */}
      <group position-y={-1.3} rotation={[0, Math.PI / 2, 0]}>
        <ContactShadows
          opacity={0.45}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />

        <AriModel animation={animation} scale={1.2} />
        {animation === 'Gaming' && (
          <RoomModel position={[14.5, -0.2, 1.6]} scale={1.7} />

          //   <mesh scale={[0.8, 0.5, 0.5]} position-y={0.2}>
          //     <boxGeometry />
          //     <meshStandardMaterial color={'red'} />
          //   </mesh>
        )}

        {/* <mesh
          scale={5}
          rotation={[-Math.PI * 0.5, 0, 0]}
          position={[0, -0.001, 0]}
        >
          <planeGeometry />
          <meshStandardMaterial color={'green'} />
        </mesh> */}
      </group>
    </>
  )
}

export default Experience
