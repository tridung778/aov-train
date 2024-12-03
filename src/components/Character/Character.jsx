/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import Model from '../Model/Model'

const Character = ({ x, y, modelName }) => {
  return (
    <div className="absolute z-0 h-full w-full">
      <Canvas>
        {/* Ánh sáng */}
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/* Mô hình 3D */}
        <Model x={x} y={y} modelName={modelName} />
        {/* Điều khiển camera */}
      </Canvas>
    </div>
  )
}

export default Character
