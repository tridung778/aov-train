import Character from '@/components/Character/Character'
import throttle from 'lodash.throttle'
import { useState } from 'react'
import { IoExitOutline } from 'react-icons/io5'
import { Joystick } from 'react-joystick-component'
import { useNavigate } from 'react-router-dom'

const ShootPage = () => {
  const navigate = useNavigate()

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [showJoystick, setShowJoystick] = useState(false)
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

  const handleShowJoystick = () => {
    setShowJoystick(true) // Hiển thị joystick khi hover
  }

  const handleHideJoystick = () => {
    setShowJoystick(false) // Ẩn joystick khi không hover
  }
  return (
    <div className="relative h-screen w-screen bg-[url('./images/map.jpg')] bg-cover bg-center">
      <div
        onClick={() => navigate('/')}
        className="absolute right-0 top-0 z-10 m-2 cursor-pointer rounded-lg bg-black p-4 text-white hover:bg-zinc-900">
        <IoExitOutline />
      </div>
      <div className="absolute bottom-0 z-10 m-10">
        <Joystick size={100}></Joystick>
      </div>
      <div className="absolute bottom-0 right-0 z-10 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div
            onMouseMove={handleShowJoystick}
            onMouseLeave={handleHideJoystick}
            className="absolute left-[-60px] top-[-60px] size-16 rounded-full bg-[url('./images/elsu-2.png')] bg-cover bg-center">
            {showJoystick && (
              <Joystick size={70} baseColor="rgba(159, 141, 238, 0.659)" stickColor="rgba(77, 25, 172, 0.916)" />
            )}
          </div>

          <div className="absolute right-[40px] top-[-90px] size-16 rounded-full bg-[url('./images/elsu-3.png')] bg-cover bg-center"></div>

          <div className="absolute bottom-[40px] left-[-110px] size-16 rounded-full bg-[url('./images/elsu-1.png')] bg-cover bg-center"></div>

          <div className="size-32 rounded-full bg-[url('./images/hand.png')] bg-cover bg-center"></div>
        </div>
      </div>
      <Character x={position.x - 40} y={position.y + 50} modelName="elsu" />
    </div>
  )
}

export default ShootPage
