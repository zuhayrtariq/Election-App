import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import './styles.css';
import Experience from './Experience';
export default function HomePage() {
  return (
    <div className='h-screen w-full bg-red-500'>

    <Canvas  shadows camera={{ position: [0, 2, 8], fov: 40 }} >
      <color attach={'background'} args={['white']} />
     
      <Experience/>
      {/* <Stars /> */}
    </Canvas>
    </div>
  )
}

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() =>random.inSphere(new Float32Array(5001), { radius:8 }));
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 100
    ref.current.rotation.y -= delta / 150
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="gray" size={0.07} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
