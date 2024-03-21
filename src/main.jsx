import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
