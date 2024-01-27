import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { Analytics } from '@vercel/analytics/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics/>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
)
