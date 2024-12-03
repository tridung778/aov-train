import { Joystick } from 'react-joystick-component'
import { IoExitOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Character from '@/components/Character/Character'
import throttle from 'lodash.throttle'

const AvoidPage = () => {
  const navigate = useNavigate()

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const step = 1

  const handleMove = throttle((data) => {
    const { x, y } = data
    setPosition((prev) => {
      const newX = prev.x + x * step
      const newY = prev.y - y * step
      return {
        x: newX,
        y: newY
      }
    })
  }, 50)

  const handleStop = () => {}

  return (
    <div className="relative h-screen w-screen bg-[url('./images/map.jpg')] bg-cover bg-center">
      <div
        onClick={() => navigate('/')}
        className="absolute right-0 top-0 z-10 m-2 cursor-pointer rounded-lg bg-black p-4 text-white hover:bg-zinc-900">
        <IoExitOutline />
      </div>
      <div className="absolute bottom-0 z-10 m-10">
        <Joystick size={100} move={handleMove} stop={handleStop}></Joystick>
      </div>
      <Character x={position.x} y={position.y} modelName="veres" />
    </div>
  )
}

export default AvoidPage
