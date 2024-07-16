import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Contextapi from './Context Api/Contextapi.jsx'
import AuthContext from './Context Api/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Contextapi>
    <AuthContext>
      <App />
    </AuthContext>
    </Contextapi>
    </BrowserRouter>
  </React.StrictMode>
)
