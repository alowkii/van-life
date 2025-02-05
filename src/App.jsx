import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import CheckoutPage from './pages/CheckoutPage'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
