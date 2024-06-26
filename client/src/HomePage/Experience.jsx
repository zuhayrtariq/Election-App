import { CameraControls, Environment, Float, GradientTexture, MeshReflectorMaterial, OrbitControls, RenderTexture, Text } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import {useControls} from 'leva'
import { degToRad, lerp } from "three/src/math/MathUtils";

const Experience = () => {
  

 

  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/video.mp4', crossOrigin: '', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return (
    <>
    {/* <CameraControls ref={controls}/> */}
    {/* <OrbitControls/>  */}
    {/* <ambientLight  intensity={intensity} /> */}
    {/* <directionalLight position={0,0,1}/> */}
    <Text
        // font={"fonts/Poppins-Black.ttf"}
        font={'fonts/Lato-Black.ttf'}
        // font='fonts/Rubik-Black.ttf'
        position-x={-1.8}
        position-y={-0.5}
        position-z={1}
        lineHeight={0.8}
        textAlign="center"
        rotation-y={degToRad(30)}
        anchorY={"bottom"}
      >
       Elections{"\n"}2024
        <meshBasicMaterial
      color={'green'} 
        >
          {/* <GradientTexture
          stops={[0.2,0.5]} // As many stops as you want
          colors={['green', 'white']} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
         /> */}
           <videoTexture attach="map" args={[video]} />
            </meshBasicMaterial>
      </Text>
      <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          // blur={[1, 1]}
          resolution={2048}
          mixBlur={10}
          mixStrength={5}
          roughness={1}
          // depthScale={1}
          opacity={0.5}
          transparent
          // minDepthThreshold={5}
          // maxDepthThreshold={1.4}
          // color="green"
          // metalness={0.5}
        />
      </mesh>
    
      <Environment preset='sunset'/>
    </>
  )
}

export default Experience