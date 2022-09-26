import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useEvent } from 'react-use'

export function useLerpedMouse(lerp = 0.1) {
  // const mouse = useThree((state) => state.pointer)

  const mouse = useRef(new THREE.Vector2())

  useEvent('pointermove', (e) => {
    const { mapLinear } = THREE.MathUtils

    const x = mapLinear(e.pageX, 0, window.innerWidth, -1, 1)
    const y = mapLinear(e.pageY, 0, window.innerHeight, -1, 1)
    mouse.current.set(x, y)
  })

  const lerped = useRef(mouse.current.clone())
  useFrame(() => {
    lerped.current.lerp(mouse.current, lerp)
  })
  return lerped
}

export function useLerpedScroll(lerp = 0.1) {
  const lerped = useRef(0)
  useFrame(() => {
    const scroll = window.scrollY / (document.body.offsetHeight - window.innerHeight)
    lerped.current += (scroll - lerped.current) * lerp
  })
  return lerped
}
