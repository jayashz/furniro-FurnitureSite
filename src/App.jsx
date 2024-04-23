
import './App.css'
import Home from './pages/Home'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart';
import Check_out from './pages/Check_out'



const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path: '/shop',
    element: <Shop />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/check-out',
    element: <Check_out/>
  }

]);


function App() {

  return (
    
      <RouterProvider router={router}/>
  )
}

export default App
