import { GLTF as GLTFThree } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh, Material } from 'three'

declare module 'three-stdlib' {
  export interface GLTF extends GLTFThree {
    nodes: Record<string, Mesh>
    materials: Record<string, Material>
  }
}
