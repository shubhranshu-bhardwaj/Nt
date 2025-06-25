import './index.css'
import { ThemeProvider } from './Context/ThemeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {

  return (
    <>
     <ThemeProvider>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
     </ThemeProvider>
    </>
  )
}

export default App
