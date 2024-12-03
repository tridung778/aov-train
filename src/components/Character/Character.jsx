/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from '../Model/Model'

const Character = ({ x, y }) => {
  return (
    <div className="absolute z-0 h-full w-full">
      <Canvas>
        {/* Ánh sáng */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Mô hình 3D */}
        <Model x={x} y={y} />

        {/* Điều khiển camera */}
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default Character
