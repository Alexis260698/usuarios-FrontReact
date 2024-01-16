import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { UsersApp } from './Components/UsersApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Authprovider } from './auth/context/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Authprovider>
        <UsersApp />
      </Authprovider>
    </BrowserRouter>
  </React.StrictMode>,
)
