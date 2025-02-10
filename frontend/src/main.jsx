import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
import ServicesContextProvider from './context/ServiceContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <ServicesContextProvider>
        <App />
      </ServicesContextProvider>
    </AppContextProvider>
  </BrowserRouter>,
)
