import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AvoidPage from './pages/Avoid/AvoidPage'
import HomePage from './pages/Home/HomePage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/avoid" element={<AvoidPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
