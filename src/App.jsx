
import './App.css'
import Home from './pages/Home'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import About from './pages/About'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path: '/shop',
    element: <Shop/>
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about',
    element: <About />
  },

])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
