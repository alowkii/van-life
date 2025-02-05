import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Vans from './components/Vans'
import VanDetail from './components/VanDetail'
import CheckoutPage from './components/CheckoutPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetail />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
