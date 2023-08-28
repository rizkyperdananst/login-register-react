import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello World! 🖐</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
