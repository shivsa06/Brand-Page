import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' //globally import
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render( //dom manipulation => where we are are getting element
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)