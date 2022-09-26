/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import ThreeModel from './ThreeModel'

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
      <Suspense fallback={'...'}>
        <ThreeModel />
      </Suspense>
    </Canvas>
  )
}
