import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Add from './pages/add_users.jsx'
import View from './pages/view_users.jsx'
import Profile from './pages/profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
</React.StrictMode>,
)
