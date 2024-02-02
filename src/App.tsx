import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Toast from '@/components/Toast'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      
      <Toast />
    </BrowserRouter>
  )
}

export default App
