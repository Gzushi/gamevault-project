import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './pages/App'
import LogIn from './pages/LogIn'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/login',
    element: <LogIn/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
