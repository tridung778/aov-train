/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Model = ({ x, y, modelName }) => {
  const modelRef = useRef()

  // Tải file GLTF
  const { scene } = useGLTF(`/models/${modelName}/scene.gltf`) // Đường dẫn tới file GLTF

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.5} // Tùy chỉnh tỉ lệ mô hình
      position={[x / 30, -y / 30, -1]} // Tùy chỉnh vị trí
      rotation={[Math.PI / 4, Math.PI / 1.5, 0]} // Xoay để có góc nhìn từ trên xuống
    />
  )
}

export default Model
