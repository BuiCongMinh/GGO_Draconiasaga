import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/app",
    element: <App />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
