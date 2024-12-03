import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AvoidPage from './pages/Avoid/AvoidPage'
import HomePage from './pages/Home/HomePage'
import ShootPage from './pages/Shoot/ShootPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/avoid" element={<AvoidPage />} />
          <Route path="/shoot" element={<ShootPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
