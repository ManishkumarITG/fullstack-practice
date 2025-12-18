import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import AdminPannel from './components/AdminPannel'
import Login from './components/login'
import LoginProtectedRoute from './components/LoginProtectedRoute'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<LoginProtectedRoute />}>
        <Route path="/home" element={<Home />}  >

        </Route>
      </Route>
    </Routes>
  )
}

export default App
