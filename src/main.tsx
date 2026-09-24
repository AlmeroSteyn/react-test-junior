import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  type RouteObject,
} from 'react-router-dom'
import App from './App'
import { Home } from './pages/Home'
import { About } from './pages/About'
import './index.css'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
