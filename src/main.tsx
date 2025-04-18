import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardLayoud from './components/layouts/Dashboard-layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello</div>
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
        element: <h1>Dashboard main page</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
