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
import { hostVansLoader, hostVanDetailLoader } from './pages/Host/HostVansLoader'
import PageNotFound from './pages/PageNotFound'
import Error from './components/Error'
import Login, { action as loginAction, loader as loginLoader } from './pages/Login'
import { requireAuth } from './utils'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />} errorElement={<Error />}/>
    <Route path='host' element={<HostLayout />} errorElement={<Error />}>
      <Route 
        index 
        element={<Dashboard />} 
        errorElement={<Error />}
        loader={async() => await requireAuth()}
      />
      <Route 
        path='income' 
        element={<Income />} 
        errorElement={<Error />}
        loader={async() => await requireAuth()}
      />
      <Route 
        path='reviews' 
        element={<Reviews />} 
        errorElement={<Error />}
        loader={async() => await requireAuth()}
      />
      <Route  
        path='vans' 
        element={<HostVans />} 
        loader={async () => {
          await requireAuth()
          return hostVansLoader()
        }}
        errorElement={<Error />}        
      />
      <Route 
        path='vans/:id' 
        element={<HostVansDetail />}
        loader={async () => {
          await requireAuth()
          return hostVanDetailLoader()
        }}
        errorElement={<Error />}
      >
        <Route index element={<HostVansInfo />} errorElement={<Error />}/>
        <Route path='pricing' element={<HostVansPricing />} errorElement={<Error />}/>
        <Route path='photos' element={<HostVansPhotos />} errorElement={<Error />} />
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
      errorElement={<Error />}
    />
    <Route path='checkout' element={<CheckoutPage />} errorElement={<Error />} />
    <Route 
      path='login' 
      element={<Login />} 
      errorElement={<Error />}
      loader={loginLoader}
      action={loginAction}
    />
    <Route path='*' element={<PageNotFound />} errorElement={<Error />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
