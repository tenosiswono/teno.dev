import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

import ThreeModel from './ThreeModel'
import { useTheme } from 'next-themes'

export default function ThreeCanvas() {
  const { theme, resolvedTheme } = useTheme()

  const ref = useRef()
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ fov: 50 }}
      className="bg-skin-base pointer-events-none absolute"
      style={{
        position: 'absolute',
        top: '112px',
        right: '0px',
        bottom: '0px',
        left: '30%',
      }}
    >
      <Suspense fallback={null}>
        <Stage
          controls={ref}
          preset="rembrandt"
          intensity={1}
          environment={theme === 'dark' || resolvedTheme === 'dark' ? 'night' : 'dawn'}
        >
          <ThreeModel />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
  )
}
