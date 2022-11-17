import './styles/main.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}
export default App
