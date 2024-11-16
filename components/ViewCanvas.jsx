'use client'

import { Canvas } from '@react-three/fiber'
import { Scroll, ScrollControls, View } from '@react-three/drei'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import React, { useState, useEffect } from 'react'
import { Leva } from 'leva'
import Experience from './Experience'
import { MotionConfig } from 'framer-motion'
import { ScrollManager } from './ScrollManager'
import { Interface } from './Interface'
import { Menu } from './Menu'
import { LoadingScreen } from './LoadingScreen'

// adding loader without hydration error; we use it when it needs only.
const Loader = dynamic(
  () => import('@react-three/drei').then((mod) => mod.Loader),
  { ssr: false }
)

export default function ViewCanvas() {
  const [section, setSection] = useState(0)
  const [started, setStarted] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    setMenuOpened(false)
  }, [section])

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <Leva hidden />
      <MotionConfig
        transition={{
          type: 'spring',
          mass: 5,
          stiffness: 500,
          damping: 55,
          restDelta: 0.0001,
        }}
      >
        <Canvas
          // style={{
          //   position: 'fixed',
          //   top: 0,
          //   left: '50%',
          //   transform: 'translateX(-50%)',
          //   overflow: 'hidden',
          //   pointerEvents: 'none',
          //   zIndex: 30,
          //   background: '#ececec',
          //   width: '100%',
          //   height: '100%',
          // }}
          shadows
          dpr={[1, 1.5]}
          gl={{ antialias: true }}
          camera={{
            fov: 40,
          }}
        >
          <color attach="background" args={['black']} />

          {/* <Suspense fallback={null}>
          <View.Port />
        </Suspense> */}
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense>
                {started && (
                  <Experience section={section} menuOpened={menuOpened} />
                )}
              </Suspense>
            </Scroll>
            <Scroll html>
              {started && <Interface setSection={setSection} />}
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        {/* <Loader /> */}
      </MotionConfig>
    </>
  )
}
