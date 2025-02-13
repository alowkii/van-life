import './App.css'
import  {  
          RouterProvider,
          createBrowserRouter,
          createRoutesFromElements,
          Route 
        } 
        from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import { vansLoader, vanDetailLoader } from './pages/Vans/VanLoader'
import CheckoutPage from './pages/Host/CheckoutPage'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans from './pages/Host/HostVans'
import HostVansDetail from './pages/Host/HostVansDetail'
import HostVansInfo from './pages/Host/HostVansInfo'
import HostVansPricing from './pages/Host/HostVansPricing'
import HostVansPhotos from './pages/Host/HostVansPhotos'
import PageNotFound from './pages/PageNotFound'
import Error from './components/Error'
import Login from './pages/Login'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='host' element={<HostLayout />}>
      <Route index element={<Dashboard />}/>
      <Route path='income' element={<Income />}/>
      <Route path='reviews' element={<Reviews />}/>
      <Route  path='vans' 
              element={<HostVans />} 
              loader={vansLoader}
              errorElement={<Error/>}        
      />
      <Route path='vans/:id' element={<HostVansDetail />}> 
        <Route index element={<HostVansInfo />} />
        <Route path='pricing' element={<HostVansPricing />} />
        <Route path='photos' element={<HostVansPhotos />} />
      </Route>
    </Route>
    <Route path='about' element={<About />} />
    <Route 
      path='vans' 
      element={<Vans />} 
      loader={vansLoader}
      errorElement={<Error/>}
    />
    <Route 
      path='vans/:id' 
      element={<VanDetail />} 
      loader={vanDetailLoader}
    />
    <Route path='checkout' element={<CheckoutPage />} />
    <Route path='login' element={<Login />} />
    <Route path='*' element={<PageNotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
