'use client'

import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import React from 'react'
import { Leva } from 'leva'

// adding loader without hydration error; we use it when it needs only.
const Loader = dynamic(
  () => import('@react-three/drei').then((mod) => mod.Loader),
  { ssr: false }
)

export default function ViewCanvas() {
  return (
    <>
      <Leva />
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 30,
          background: 'red',
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{
          fov: 30,
        }}
      >
        {/* <color attach="background" args={['#ececec']} /> */}

        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
