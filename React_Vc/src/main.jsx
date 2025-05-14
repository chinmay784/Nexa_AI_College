import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import UserAppProvider from './context/UserAppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserAppProvider>
      <App />
    </UserAppProvider>
  </StrictMode>,
)
