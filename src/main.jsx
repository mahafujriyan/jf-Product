import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Route/Routers.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Pages/Context/AuthProvider.jsx'
import CartProvider from './Pages/Context/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
       <CartProvider>
        <RouterProvider router={router} />,
       </CartProvider>
</AuthProvider>
  </StrictMode>,
)
