'use client'
import {
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
  axesHelper,
  useScroll,
} from '@react-three/drei'
import React, { useRef, useState, useEffect } from 'react'
import { AriModel } from './AriModel'
import { Leva, useControls } from 'leva'

import RoomModel from './RoomModel'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Group } from 'three'
import { motion } from 'framer-motion-3d'
import { animate, useMotionValue } from 'framer-motion'
import { useFrame, useThree } from '@react-three/fiber'
import { Background } from './Background'
import { Projects } from './Projects'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Experience = (props) => {
  const { menuOpened } = props
  const { viewport } = useThree()
  const data = useScroll()

  const isMobile = window.innerWidth < 768
  const responsiveRatio = viewport.width / 12
  const officeScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9))

  const [section, setSection] = useState(0)

  const cameraPositionX = useMotionValue()
  const cameraLookAtX = useMotionValue()

  const roomRef = useRef()

  // const { animation } = useControls({
  //   animation: {
  //     value: 'Gaming',
  //     options: ['Gaming', 'Standing', 'Falling'],
  //   },
  // })
  const { position, rotation, scale, ariposition, arirotation, ariscale } =
    useControls({
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: 1,
      ariposition: { x: 0, y: 0, z: 0 },
      arirotation: { x: 0, y: 0, z: 0 },
      ariscale: 1,
    })
  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      type: 'spring',
      mass: 5,
      stiffness: 500,
      damping: 55,
      restDelta: 0.0001,
    })
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      type: 'spring',
      mass: 5,
      stiffness: 500,
      damping: 55,
      restDelta: 0.0001,
    })
  }, [menuOpened])

  const characterContainerAboutRef = useRef()

  const [characterAnimation, setCharacterAnimation] = useState('Falling')
  useEffect(() => {
    setCharacterAnimation('Falling')
    setTimeout(() => {
      setCharacterAnimation(
        section === 0 || 1 ? 'Gaming' : section === 2 ? 'Falling' : 'Standing'
      )
    }, 200)
  }, [section])

  const characterGroup = useRef()

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages)

    if (curSection > 3) {
      curSection = 3
    }

    if (curSection !== section) {
      setSection(curSection)
    }

    state.camera.position.x = cameraPositionX.get()
    state.camera?.lookAt(cameraLookAtX.get(), 0, 0)

    // const position = new THREE.Vector3()
    if (section === 0 || 1) {
      // IMPORTANT:Getting Current Position
      characterContainerAboutRef.current.getWorldPosition(
        characterGroup.current.position
      )
    }
    // console.log([position.x, position.y, position.z])

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");

    // console.log([euler.x, euler.y, euler.z]);
  })

  // useGSAP(() => {
  //   if (!roomRef.current) return

  //   const introTl = gsap.timeline({
  //     defaults: {
  //       duration: 3,
  //       ease: 'back.out(1.4)',
  //     },
  //   })

  //   const scrollTl = gsap.timeline({
  //     defaults: {
  //       duration: 2,
  //     },
  //     scrollTrigger: {
  //       trigger: '.hero',
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       scrub: 1.5,
  //     },
  //   })
  //   scrollTl
  //     // Rotate can group
  //     .to(roomRef.current.rotation, { y: -1.7 })
  //   // .to(roomRef.current.position, { x: 0, y: 10, z: 0 }, 0)
  // })
  return (
    <>
      {/* <OrbitControls /> */}
      {/* <Sky /> */}
      <ambientLight intensity={5} />
      {/* <Environment preset="sunset" /> */}
      <Background />
      <group
        ref={roomRef}
        position-y={section === 0 ? -1.3 : -5.5}
        position-z={0}
        rotation={[
          0,
          section === 0 ? (-2 * Math.PI) / 2.2 : (-2.2 * Math.PI) / 9,
          0,
        ]}
      >
        <ContactShadows
          opacity={0.45}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <motion.group
          ref={characterGroup}
          // rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
          scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
          animate={'' + section}
          transition={{
            duration: 0.6,
          }}
          variants={{
            // 0: {
            //   scaleX: officeScaleRatio,
            //   scaleY: officeScaleRatio,
            //   scaleZ: officeScaleRatio,
            // },
            // 1: {
            //   y: -viewport.height + 0.5,
            //   x: isMobile ? 0.3 : 0,
            //   z: 7,
            //   rotateX: 0,
            //   rotateY: isMobile ? -Math.PI / 2 : 0,
            //   rotateZ: 0,
            //   scaleX: isMobile ? 1.5 : 1,
            //   scaleY: isMobile ? 1.5 : 1,
            //   scaleZ: isMobile ? 1.5 : 1,
            // },
            2: {
              x: isMobile ? -1.4 : 2,
              y: -viewport.height * 2 + 0.5,
              z: 0,

              // x: ariposition.x,
              // y: ariposition.y,
              // z: ariposition.z,
              // rotateX: 0,
              // rotateY: Math.PI / 2,
              // rotateZ: 0,
              rotateX: arirotation.x,
              rotateY: arirotation.y,
              rotateZ: arirotation.z,
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1,
            },
            3: {
              y: -viewport.height * 3 + 2,
              x: 0.24,
              z: 8.5,
              rotateX: 0,
              rotateY: -Math.PI / 4,
              rotateZ: 0,
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1,
            },
          }}
        >
          <AriModel
            // position={[ariposition.x, ariposition.y, ariposition.z]}
            position={[0, -viewport.height * 3 + 1, 0]}
            rotation={[arirotation.x, arirotation.y, arirotation.z]}
            scale={ariscale}
            animation={characterAnimation}
            // scale={1.2}
            // {section === 1}
          />

          {/* <Avatar animation={characterAnimation} wireframe={section === 1} /> */}
        </motion.group>

        <ambientLight intensity={1} />
        <motion.group
          position={[
            isMobile ? 0 : 1.5 * officeScaleRatio,
            isMobile ? -viewport.height / 6 : 2,
            3,
          ]}
          scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
          // scale={0.6}
          // position={[-3, -5, 0]}
          rotation-y={Math.PI / 2}
          animate={{
            y: isMobile ? -viewport.height / 6 : 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <RoomModel
            section={section}
            position={[position.x, position.y, position.z]}
            rotation={[rotation.x, rotation.y, rotation.z]}
            scale={scale}
          />

          <group
            ref={characterContainerAboutRef}
            name="CharacterSpot"
            // position={[ariposition.x, ariposition.y, ariposition.z]}
            // rotation={[arirotation.x, arirotation.y, arirotation.z]}
            // position={[11, 2.3, 2.15]}
            // rotation={[0, 3, 3.5]}
            position={[6.83, -1.72, -5.39]}
            // rotation={[0, 3, 3.5]}
            scale={0.7}
            // position={[15, 5.35, -1.3]}
          >
            <AriModel
              // // position={[-7.081, ariposition.y, 6.371]}
              // // rotation={[arirotation.x, arirotation.y, arirotation.z]}
              // position={[ariposition.x, ariposition.y, ariposition.z]}
              // position={section == 3 && [0, -viewport.height * 3 + 1, 0]}
              // rotation={[arirotation.x, arirotation.y, arirotation.z]}
              // position={[15, 5.35, -1.3]}
              scale={ariscale}
              animation={characterAnimation}
              // scale={1.2}
            />
          </group>
        </motion.group>
        {/* <mesh
          scale={5}
          rotation={[-Math.PI * 0.5, 0, 0]}
          position={[0, -0.001, 0]}
        >
          <planeGeometry />
          <meshStandardMaterial color={'green'} />
          </mesh> */}
      </group>
      {/* <Projects /> */}
    </>
  )
}

export default Experience
