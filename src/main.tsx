import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import DashboardLayoud from './components/layouts/Dashboard-layout'
import ContenCreate from './components/dashboard/ContentCreate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Link to={'/dashboard'}>Dashboard</Link>
  },
  {
    path: '/registor',
    element: <div className='text-4xl text-white'>Registor</div>
  },
  {
    path: '/dashboard',
    element: <DashboardLayoud/>,
    children: [
      {
        index: true,
        element: <ContenCreate/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
