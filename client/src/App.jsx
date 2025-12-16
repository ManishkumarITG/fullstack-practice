import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import AdminPannel from './components/AdminPannel'
import Login from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}  >
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
