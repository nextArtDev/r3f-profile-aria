'use client'
import Experience from '@/components/Experience'
import ScrollControl from '@/components/ScrollControl'
import ViewCanvas from '@/components/ViewCanvas'
import { Scroll, ScrollControls, View } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Home() {
  return (
    <section className="relative flex flex-col">
      <section className=" w-screen  h-screen">
        <ViewCanvas />
      </section>
      <section className="fixed inset-0 top-[400vh] left-0 w-full h-full overflow-hidden bg-black">
        <Canvas className="z-[60]" camera={{ position: [0, 0, 5], fov: 75 }}>
          <ScrollControl />
        </Canvas>
      </section>
    </section>
  )
}
