
import './App.css'
import LandingPage from './pages/landingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './auth/login'
import Signup from './auth/signup'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './auth/authcontext'
import Dashboard from './pages/dashboard'
import Tickets from './pages/tickets'

function App() {
  

  return (
    <>
      <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </Router>
    </AuthProvider>
    </>
  )
}

export default App
