import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import { BrowserRouter } from 'react-router-dom'
// import RoutersConfig from './routers'
import Router from './Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
)
