import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './View/Homepage/App.jsx'
import Login from './View/Login/Login.jsx'
import './index.css'
import '@fontsource/inter';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
