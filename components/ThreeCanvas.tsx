/* eslint-disable react/no-unknown-property */
import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

import ThreeModel from './ThreeModel'
import { useTheme } from 'next-themes'

export default function ThreeCanvas() {
  const { theme, resolvedTheme } = useTheme()
  console.log(theme, resolvedTheme)
  const ref = useRef()
  return (
    <Canvas
      shadows
      camera={{ fov: 50 }}
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
      <Suspense fallback={null}>
        <Stage
          controls={ref}
          preset="rembrandt"
          intensity={1}
          environment={theme === 'dark' || resolvedTheme === 'dark' ? 'night' : 'dawn'}
        >
          <ThreeModel dark={theme === 'dark' || resolvedTheme === 'dark'} />
        </Stage>
      </Suspense>
    </Canvas>
  )
}
