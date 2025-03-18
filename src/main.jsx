import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import routes from './pages/routes.jsx'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

const router = createMemoryRouter(routes);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
