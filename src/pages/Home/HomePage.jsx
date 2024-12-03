import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[url('./images/home-background.jpg')] bg-cover bg-center">
      <h1 className="font-pressStart text-5xl font-bold text-white">AOV Train</h1>
      <Button className="mt-3" onClick={() => navigate('/avoid')}>
        Luyện né tránh
      </Button>

      <Button className="mt-3" onClick={() => navigate('/shoot')}>
        Luyện bắn Elsu
      </Button>
    </div>
  )
}

export default HomePage
