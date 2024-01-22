import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ContextProvider } from './context/contextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />  
        </Routes>
      </Router>
    </ContextProvider>
    
  </React.StrictMode>,
)
