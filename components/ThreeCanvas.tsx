/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ThreeModel from './ThreeModel'
import { ContactShadows, Environment } from '@react-three/drei'

export default function ThreeCanvas() {
  return (
    <Canvas
      shadows
      style={{
        position: 'absolute',
        top: '112px',
        right: '0px',
        bottom: '0px',
        left: '0',
        width: 'unset',
      }}
      className="bg-skin-base pointer-events-none absolute -z-10"
    >
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <ThreeModel />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
      </Suspense>
    </Canvas>
  )
}
