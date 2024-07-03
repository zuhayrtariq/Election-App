import { Environment, Float, MeshReflectorMaterial, OrbitControls, RenderTexture, Text } from '@react-three/drei'
import React from 'react'

import { degToRad, lerp } from "three/src/math/MathUtils";

const Experience = () => {
  return (
    <>
    {/* <OrbitControls/> */}
    <Text
        font={"fonts/Poppins-Black.ttf"}
        position-x={-1.3}
        position-y={-0.5}
        position-z={1}
        lineHeight={0.8}
        textAlign="center"
        rotation-y={degToRad(30)}
        anchorY={"bottom"}
      >
        Elections{"\n"} 2024
        <meshBasicMaterial
      color={'white'}
        > 
        <RenderTexture attach={"map"}>
        <color attach="background" args={["#fff"]} />
        <Environment preset="sunset" />
        <Float floatIntensity={4} rotationIntensity={5}>
          {/* <Clouds
            scale={20}
            rotation-y={-degToRad(25)}
            rotation-x={degToRad(40)}
            position-y={-0.5}
          /> */}
        </Float>
      </RenderTexture>
            </meshBasicMaterial>
      </Text>
      <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={10}
          roughness={1}
          depthScale={1}
          opacity={0.5}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="green"
          metalness={0.5}
        />
      </mesh>
    
      <Environment preset='sunset'/>
    </>
  )
}

export default Experience